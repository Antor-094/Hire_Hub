import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const data = useLoaderData();
  // console.log(data.jobs)
  const jobsArray = data.jobs;
  const { id } = useParams();
  //   console.log(id)

  const job = jobsArray.find((job) => job.id === Number(id));

  return (
    <div>
   <div className="relative bg-gradient-to-r from-indigo-100 to-purple-300 mt-0 w-full h-[300px]">
  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-no-repeat bg-cover" style={{backgroundImage: "url('../assets/All Images/Vector-1.png')"}}></div>
  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-no-repeat bg-cover" style={{backgroundImage: "url('../assets/All Images/Vector.png')"}}></div>
  <div className="absolute inset-0">
    <div className="bg-gray-900 bg-opacity-50 w-full h-full"></div>
  </div>
  
</div>


      <div>
      {job && (
        <>
          <h1>{job.job_description}</h1>
          <p>{job.company_name}</p>
          {/* Add more details here */}
        </>
      )}
      </div>
    </div>
  );
};

export default JobDetails;
