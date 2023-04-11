import React from "react";

import { useLoaderData } from "react-router-dom";
// import SingleAppliedJob from "./SingleAppliedJob";
// import Header2 from "./Header2";
import { getAppliedJob } from "../fakedb";
import SingleAppliedJob from "./SingleAppliedJob";

const AppliedJobs = () => {
  const getJobDetails = useLoaderData();
  const getAppliedJobs = getAppliedJob();

  const matchedData = getJobDetails.jobs.filter((job) => {
    for (const id in getAppliedJobs) {
      if (job.id == id) {
        return job;
      }
    }
  });
  console.log(matchedData)
  return (
    <div>
      {/* <Header2>Applied Jobs</Header2> */}
      <div className="mt-32 md:w-[80%] mx-auto">
        {matchedData.map((job) => (
          <SingleAppliedJob key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;