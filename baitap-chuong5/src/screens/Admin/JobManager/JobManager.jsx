import React, { useContext } from "react";
import { JobContext } from "../../../context/JobContext";

const JobManager = () => {
  const { jobs } = useContext(JobContext);
  return (
    <ul>
      {jobs.map((job) => {
        return (
          <li key={job.id}>
            {job.title} - {job.company}
          </li>
        );
      })}
    </ul>
  );
};

export default JobManager;
