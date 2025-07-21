import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
};

export default Header;
