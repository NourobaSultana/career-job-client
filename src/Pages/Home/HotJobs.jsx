import React, { use } from "react";
import JobCard from "../../Shared/JobCard";

const HotJobs = ({ jobs, loading }) => {
  //   const jobs = use(jobsPromise);
  if (loading) {
    return <p className="text-center my-10">Loading hot jobs...</p>;
  }

  if (!jobs.length) {
    return <p className="text-center my-10">No jobs found</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job}></JobCard>
      ))}
    </div>
  );
};

export default HotJobs;
