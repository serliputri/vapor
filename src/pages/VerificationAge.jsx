import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/verificationage.css";

function VerificationAge() {
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2 && /^\d*$/.test(value)) {
      setMonth(value);
    }
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2 && /^\d*$/.test(value)) {
      setDate(value);
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    if (value.length <= 4 && /^\d*$/.test(value)) {
      setYear(value);
    }
  };

  return (
    <>
      <section className="alert-section">
        <div className="title-alert">
          <p>
            WARNING: Vaping products contain nicotine, <span className="p-alert"> a highly addictive chemical. Health Indonesia Generation. </span>
          </p>
        </div>
        <div>
          <h1 className="age-alert">Age Verification</h1>
        </div>
        <div className="div-enter">
          <p className="enter-alert">
            Please enter your date of birth. <span className="alert-acces">You must be 18 years or older to access this website.</span>
          </p>
        </div>

        <div>
          <form action="#" className="form-alert">
            <input type="number" placeholder="MM" value={month} onChange={handleMonthChange} className="input-alert" />
            <input type="number" placeholder="DD" value={date} onChange={handleDateChange} className="input-alert" />
            <input type="number" placeholder="YEAR" value={year} onChange={handleYearChange} className="input-alert" />
            <div>
              <Link to="/login">
                <button className="enter-btn">ENTER</button>
              </Link>
              <button className="exit-btn">EXIT</button>
            </div>
          </form>
        </div>
        <div>
          <p className="this-website">
            This website is intended for adults of legal smoking age only. <span className="all-order"> All orders placed on the website will be verified by Age </span>
            <span className="verification-at">Verification at time of delivery.</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default VerificationAge;
