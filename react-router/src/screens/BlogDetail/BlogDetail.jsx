import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/blog"); // Navigate back to the previous page
  };
  return (
    <div>
      <h1>Blog Detail</h1>
      <p>This is the detail page for a specific blog post.</p>
      <p>ID: {id}</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default BlogDetail;
