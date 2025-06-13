import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FaCheck } from "react-icons/fa";
import "./Intro.css";

function Intro() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (!isValidPhoneNumber(phone)) {
      alert("Namba ya simu si sahihi!");
      return;
    }
    localStorage.setItem("userPhone", phone);
    navigate("/read");
  };

  return (
    <div className="intro-wrapper">
      <div className="intro-box card-style">
        <h2>Get started with Kaya Power</h2>
        <p>Enter your phone number below to continue</p>

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
          disabled={!isValidPhoneNumber(phone)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Intro;
