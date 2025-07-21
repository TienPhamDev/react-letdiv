import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/jobs");
  }, [navigate]);
  return (
    <div>
      <h1>chang to job</h1>
    </div>
  );
};

export default Navigate;
