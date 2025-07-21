import React from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const pathName = useLocation();
  console.log(pathName);
  return (
    <div>
      404 - Not FOund
      {alert(`Oops! The page ${pathName.pathname} doesn't exist.`)}
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default NotFound;
