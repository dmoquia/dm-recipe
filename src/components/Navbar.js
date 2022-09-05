import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const styled = {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "18px",
    letterSpacing: "2px",
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          <span
            style={{
              fontFamily: "Permanent Marker",
              marginLeft: "2rem",
              color: "red",
            }}
          >
            namit
          </span>
          <span
            style={{
              fontFamily: "Permanent Marker",
              color: "teal",
            }}
          >
            gid
          </span>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/" style={styled}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" style={styled}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
