import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Editor = () => {
  return (
    <div className="main_container">
      <h1>Editors Page</h1>
      <br />
      <p>You must have been assigned an Editor role.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Editor;
