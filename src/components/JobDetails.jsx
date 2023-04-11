import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { addToDb, getAppliedJob } from "../fakedb";
import DynamicHeader from "./DynamicHeader";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const JobDetails = () => {
  const data = useLoaderData();
  // console.log(data.jobs)
  const jobsArray = data.jobs;
  const { id } = useParams();
  //   console.log(id)

  const job = jobsArray.find((job) => job.id === Number(id));
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
    title,
    location,
  } = job;

  const handleButtonClick = (id) => {
    const appliedJobs = getAppliedJob();
    if (appliedJobs.hasOwnProperty(id)) {
      alert('antor nadia')
    } else {
      addToDb(id);
    }
  };
  return (
    <div>
       <DynamicHeader></DynamicHeader>

      <div>
        <div className="mt-32 md:w-[80%] mx-auto md:flex gap-6">
          <div className="md:w-7/12">
            <p className="font-bold text-base">
              Job Description:&nbsp;
              <span className="text-[#757575] font-thin">
                {job_description}
              </span>
            </p>
            <p className="font-bold text-base mt-6">
              Job Responsibility:&nbsp;
              <span className="text-[#757575] font-thin">
                {job_responsibility}
              </span>
            </p>
            <p className="font-bold text-base mt-6">
              Educational requirements: <br /> <br />
              <span className="text-[#757575] font-thin">
                {educational_requirements}
              </span>
            </p>
            <p className="font-bold text-base mt-6">
              Experiences: <br /> <br />
              <span className="text-[#757575] font-thin">{experiences}</span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-indigo-100 to-purple-200 bg-opacity-10 border rounded-md p-4">
            <div className="bg-card rounded-lg p-7 mt-7 md:mt-0">
              <p className="font-bold text-lg mb-3">Job Details</p>
              <hr className="py-[1px] bg-slate-400" />
              <p className="flex gap-3 mb-4 mt-3">
                <img src="https://i.ibb.co/NLGnpVx/Frame.png" alt="" />{" "}
                <span className="font-semibold">salary :</span>{" "}
                <span className="text-[#757575]">{salary}</span>
              </p>
              <p className="flex gap-3">
                <img src="https://i.ibb.co/jD4nr31/Frame-1.png" alt="" />
                <span className="font-semibold">Job Title :</span>{" "}
                <span className="text-[#757575]">{title}</span>
              </p>

              <p className="font-bold mt-7 text-lg mb-3">Contact Information</p>
              <hr className="py-[1px] bg-slate-400" />
              <p className="flex gap-3  mt-3">
                <img src="https://i.ibb.co/HDRytBc/Frame-2.png" alt="" />
                <span className="font-semibold">Phone :</span>{" "}
                <span className="text-[#757575]">
                  {contact_information.phone}
                </span>
              </p>
              <p className="flex gap-3 my-4">
                <img src="https://i.ibb.co/h7Fw1Fx/Frame-3.png" alt="" />
                <span className="font-semibold">Email :</span>{" "}
                <span className="text-[#757575]">
                  {contact_information.email}
                </span>
              </p>
              <p className="flex gap-3">
                <img src="https://i.ibb.co/F0qm4kH/Frame-4.png" alt="" />
                <span className="font-semibold">Address :</span>{" "}
                <span className="text-[#757575]">{location}</span>
              </p>
            </div>
            {
            <button
              onClick={() => handleButtonClick(id)}
              className="btn-main mt-7 w-full hover:bg-gradient-to-l hover:bg-cyan-800"
            >
              Apply Now
            </button>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
