import React, { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import { Link } from "react-router-dom";

const JobList = () => {
  const { jobs } = useContext(JobContext);
  console.log(jobs);
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
          <Link to={`/jobs/${job.id}`}>
            {job.title} - {job.company}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
