import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Books
      </a>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/books"
            className={window.location.pathname === "/books" ? "nav-link active" : "nav-link"}
          >
            Saved Books
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
