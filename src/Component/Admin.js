import React from "react";
import { Link } from "react-router-dom";
import Users from "./Users";
import "./main.css";

const Admin = () => {
  return (
    <div className="main_container">
      <h1>Admins Page</h1>
      <br />
      <Users />
      <br />
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Admin;
