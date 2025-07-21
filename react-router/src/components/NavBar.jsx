import React from "react";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Blog
      </NavLink>
      <Link
        to="/blog/1"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Blog #1
      </Link>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Dashboard
      </NavLink>
    </nav>
  );
};

export default NavBar;
