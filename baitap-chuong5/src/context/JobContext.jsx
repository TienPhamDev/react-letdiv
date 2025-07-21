import React, { createContext, useState } from "react";

const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "developer", company: "Apple", descripttion: "Front-end" },
    { id: 2, title: "developer", company: "Amazon", descripttion: "Back-end" },
  ]);
  const [application, setApplication] = useState([]);
  console.log("jobs o day", jobs);
  return (
    <JobContext.Provider value={{ jobs, setJobs, application, setApplication }}>
      {children}
    </JobContext.Provider>
  );
};
export { JobProvider, JobContext };
