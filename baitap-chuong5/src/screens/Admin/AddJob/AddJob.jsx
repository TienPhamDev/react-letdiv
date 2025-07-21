import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../../../context/JobContext";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const { jobs, setJobs } = useContext(JobContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("a b c");
    const newJobs = {
      id: jobs.length + 1,
      title: title,
      company: company,
      description: description,
    };
    console.log("new job ne", newJobs);
    setJobs([...jobs, newJobs]);
    navigate("/admin/jobs");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label htmlFor="company">company</label>
      <input
        type="text"
        id="company"
        name="company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      <label htmlFor="Description">Description</label>
      <input
        type="text"
        id="Description"
        name="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default AddJob;
