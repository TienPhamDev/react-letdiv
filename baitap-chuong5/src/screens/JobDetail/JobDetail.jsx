import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { JobContext } from "../../context/JobContext";
import JobApplicationForm from "../../components/JobApplicationForm/JobApplicationForm";
const JobDetail = () => {
  const { jobs } = useContext(JobContext);
  const { id } = useParams();

  const findJob = jobs.find((job) => job.id === Number(id));

  return (
    <div>
      <h2>Job Detail - ID: {id}</h2>
      <p>{findJob.title}</p>
      <p>{findJob.company}</p>
      <p>{findJob.description}</p>
      <h3>Apply Now</h3>
      <JobApplicationForm />
    </div>
  );
};

export default JobDetail;
