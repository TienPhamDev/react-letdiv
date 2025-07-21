import React from "react";
import { Outlet, Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="posts">Post</Link> | <Link to="stats">stats</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
