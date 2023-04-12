import React, { useState } from "react";
import Job from "./Job";

const FeaturedJob = ({ allJobs }) => {
  const [showAllJobs, setShowAllJobs] = useState(false);

  const jobs = allJobs.jobs;

  const toggleJobs = () => {
    setShowAllJobs((prevState) => !prevState);
  };

  return (
    <div className="md:w-[80%] mx-auto mt-20">
      <h1 className="font-extrabold text-4xl text-center">Featured Jobs</h1>
      <p className="text-center my-3 mb-8">
      Discover countless career prospects with comprehensive details you require. It's your destiny.
      </p>
      <div className="grid md:grid-cols-2 gap-5 mt-8">
      {jobs &&
        jobs
          .slice(0, showAllJobs ? jobs.length : 4)
          .map((job) => <Job key={job.id} job={job} />)}
      </div>
      <button className="btn-main block mx-auto mt-8" onClick={toggleJobs}>
        {showAllJobs ? "See less" : "See all jobs"}
      </button>
    </div>
  );
};

export default FeaturedJob;
