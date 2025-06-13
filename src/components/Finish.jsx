import { useNavigate } from "react-router-dom";
import "./Finish.css";

function Finish() {
  const navigate = useNavigate();

  return (
    <div className="finish-wrapper">
      <div className="finish-box">
        <h2>Hongera! Umemaliza kusoma 📖</h2>
        <p>
          Kama uliipenda PDF hii, Programu ya <b>Kaya Power</b> ndiyo hatua yako inayofuata.
        </p>
        <a
          href="https://kayaniherbs.systeme.io/kaya-power"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>BOFYA KUCHUKUA PROGRAMU</button>
        </a>
        <p className="back" onClick={() => navigate("/read")}>← Rudi Mwanzo</p>
      </div>
    </div>
  );
}

export default Finish;