import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Lounge = () => {
  return (
    <div className="main_container">
      <h1>The Lounge</h1>
      <br />
      <p>Admins and Editors can hang out here.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>{" "}
    </div>
  );
};

export default Lounge;
