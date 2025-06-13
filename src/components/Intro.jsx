import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FaCheck } from "react-icons/fa";
import "./Intro.css";

function Intro() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (!isValidPhoneNumber(phone)) {
      alert("Namba ya simu si sahihi!");
      return;
    }
    if (name.trim().length < 2) {
      alert("Tafadhali ingiza jina kamili!");
      return;
    }

    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userName", name);
    navigate("/read");
  };

  return (
    <div className="intro-wrapper">
      <div className="intro-box card-style">
        <h2>Siri Wanazotumia Wacheza XXX Kukaa Hadi Dakika 45 Kwenye Raundi 1</h2>
        <p>Jaza jina na namba yako ya simu kufungua PDF hii ya bure. Hakikisha umesave namba yangu --0655 889 126 ili usome PDF hii.</p>

        <input
          type="text"
          placeholder="👤 Jina Kamili"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="phone-input-wrapper">
          <PhoneInput
            international
            defaultCountry="TZ"
            value={phone}
            onChange={setPhone}
            className="custom-phone-input"
          />
          {isValidPhoneNumber(phone) && (
            <span className="valid-check">
              <FaCheck />
            </span>
          )}
        </div>

        <button
          className="continue-btn"
          onClick={handleStart}
          disabled={!isValidPhoneNumber(phone) || !name}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Intro;
