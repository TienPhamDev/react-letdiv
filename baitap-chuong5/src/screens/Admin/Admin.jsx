import React from "react";
import { Outlet, Link } from "react-router-dom";
const Admin = () => {
  return (
    <div>
      <h1>Admin panel</h1>
      <nav>
        <Link to="jobs">Jobs</Link> | <Link to="add">Add</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Admin;
