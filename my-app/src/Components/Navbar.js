import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="main-nav">
        <div className="logo"></div>

        <div className="left">
          <div className="lower">
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
          </div>
          <div className="upper">
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
          </div>
        </div>
        <div className="right">
          <div className="up">
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
          </div>
          <div className="down">
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
            <Link to="/glasses"> Glasses</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
