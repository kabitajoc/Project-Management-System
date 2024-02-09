import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addProduct">Add Product</Link>
        </li>
        <li>
          <Link to="#">Services</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
