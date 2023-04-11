import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleAppliedJob from "./SingleAppliedJob";
import Header2 from "./Header2";
import { getAppliedJob } from "../fakedb";
import { faDroplet,faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AppliedJobs = () => {
  const getJobDetails = useLoaderData();
  const [filterBy, setFilterBy] = useState("");

  const getAppliedJobs = getAppliedJob();

  const matchedData = getJobDetails.jobs.filter((job) => {
    for (const id in getAppliedJobs) {
      if (job.id == id) {
        return job;
      }
    }
  }).filter((job) => {
    if (filterBy === "") {
      return true;
    } else {
      return job.remote_or_onsite === filterBy;
    }
  });

  return (
    <div>
      <Header2>Applied Jobs</Header2>
      <div className="mt-32 md:w-[80%] mx-auto">
        <div className="flex justify-end">
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn m-1">
              Sort By <FontAwesomeIcon icon={faList} />

            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={() => setFilterBy("Remote")}>Remote</button>
              </li>
              <li>
                <button onClick={() => setFilterBy("Onsite")}>Onsite</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16">
          {matchedData.map((job) => (
            <SingleAppliedJob key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
