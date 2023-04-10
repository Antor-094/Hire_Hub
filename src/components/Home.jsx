import React, {useEffect, useState } from "react";
import Header from "./Header";
import JobCat from "./JobCat";
import FeaturedJob from "./FeaturedJob";
import { useLoaderData } from "react-router-dom";
// export const FeaturedJobContext = createContext([]);
// export const jobCategoryListContext = createContext([])
const Home = () => {
  // console.log(jobs)
  const jobs = useLoaderData();
  const [jobItems, setJobItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/jobCategoryList.json");
      const data = await response.json();
      setJobItem(data.categories);
    };
    fetchData();
  }, []);
//   console.log(jobItems);
  return (
    <div>
      <Header></Header>
      <JobCat jobItems={jobItems}></JobCat>
      <FeaturedJob></FeaturedJob>
    </div>
  );
};

export default Home;
