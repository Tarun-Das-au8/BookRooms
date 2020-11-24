import React from "react";
import { Link } from "react-router-dom";
import "../styles/confirm.css";

const Confirm = () => {
  return (
    <div className="confirm">
      <h4>Thanks for Booking</h4>
      <h5>Your Booking Id is {Math.floor(100000 + Math.random() * 900000)}</h5>
      <Link to="/" className="btn-secondary">
        Back to Home
      </Link>
    </div>
  );
};
export default Confirm;
