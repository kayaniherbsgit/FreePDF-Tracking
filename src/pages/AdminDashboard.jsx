import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import db from "../firebase";
import "./AdminDashboard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AdminDashboard() {
  const [entries, setEntries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "progress"), (snapshot) => {
const data = snapshot.docs.map((docSnap) => ({
  id: docSnap.id,
  ...docSnap.data(),
}));

data.sort((a, b) => {
  const timeA = a.timestamp?.toDate()?.getTime() || 0;
  const timeB = b.timestamp?.toDate()?.getTime() || 0;
  return timeB - timeA;
});


      setEntries(data);
      setFiltered(data);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    const filteredData = entries.filter((entry) => {
      const matchPhone = entry.phone?.toLowerCase().includes(lower);
      const matchDate = dateFilter
        ? entry.timestamp?.toDate().toISOString().startsWith(dateFilter)
        : true;
      return matchPhone && matchDate;
    });
    setFiltered(filteredData);
  }, [search, dateFilter, entries]);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this entry?")) {
      await deleteDoc(doc(db, "progress", id));
    }
  };

  const exportCSV = () => {
    const csv = [
      ["Phone", "Progress", "Timestamp"],
      ...filtered.map((entry) => [
        entry.phone || "",
        (entry.percent || 0) + "%",
        entry.timestamp?.toDate().toLocaleString() || "",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "progress_data.csv";
    a.click();
  };

  const stats = {
    total: filtered.length,
    avg:
      filtered.reduce((acc, e) => acc + (Number(e.percent) || 0), 0) /
        filtered.length || 0,
  };

  const chartData = {
    labels: filtered.map((e, i) => `User ${i + 1}`),
    datasets: [
      {
        label: "Progress %",
        data: filtered.map((e) => Number(e.percent || 0)),
        backgroundColor: "#00cc66",
      },
    ],
  };

return (
  <div className="admin-wrapper">
    <div className="admin-header">
      <h2>📊 Kaya Power Progress Tracker</h2>
      <button
        className="logout-btn"
        onClick={() => {
          const auth = getAuth();
          signOut(auth).then(() => window.location.href = "/admin");
        }}
      >
        🔓 Logout
      </button>
    </div>

    <div className="stats">
      <p>👥 Total Users: {stats.total}</p>
      <p>📈 Avg Progress: {stats.avg.toFixed(1)}%</p>

      {filtered.length > 0 ? (
        <Bar
          data={chartData}
          options={{
            animation: {
              duration: 800,
              easing: "easeInOutBounce",
            },
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      ) : (
        <p>No data for chart.</p>
      )}
    </div>

    <div className="controls">
      <input
        type="text"
        placeholder="🔍 Search by phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="date"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      />
      <button onClick={exportCSV}>📤 Export CSV</button>
    </div>

    <table>
            <thead>
                <tr>
                    <th>👤 Name</th>
                    <th>📞 Phone</th>
                    <th>📈 Progress (%)</th>
                    <th>🕒 Timestamp</th>
                    <th>🗑️ Action</th>
                </tr>
        </thead>
<tbody>
  {filtered.length === 0 ? (
    <tr>
      <td colSpan="5" style={{ textAlign: "center" }}>No results found.</td>
    </tr>
  ) : (
    filtered.map((entry, index) => (
      <tr key={index}>
        <td>{entry.name || "N/A"}</td>
        <td>{entry.phone || "N/A"}</td>
<td>{Number(entry.percent || 0).toFixed(1)}%</td>
        <td>
          {entry.timestamp
            ? entry.timestamp.toDate().toLocaleString()
            : "N/A"}
        </td>
        <td>
          <button
            className="delete-btn"
            onClick={() => handleDelete(entry.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>

    </table>
  </div>
);

}

export default AdminDashboard;
