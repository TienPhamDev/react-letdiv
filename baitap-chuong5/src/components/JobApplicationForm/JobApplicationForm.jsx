import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { JobContext } from "../../context/JobContext";
const JobApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, SetEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { application, setApplication } = useContext(JobContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = {
      jobid: id,
      name: name,
      email: email,
    };
    setApplication([...application, newApplication]);
    alert("Application submitted successfully!");
    navigate("/jobs");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name: </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">Email: </label>
      <input
        type="text"
        name="Email"
        value={email}
        onChange={(e) => SetEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobApplicationForm;
