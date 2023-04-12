import React from 'react';
import SingleJobItem from './SingleJobItem';
// import { jobCategoryListContext } from './Home';

const JobCat = ({jobItems}) => {
    // const jobItems = useContext(jobCategoryListContext)
    // console.log(jobItems)
    return (
        <div className='md:w-[80%] mx-auto mt-20 p-2'>
            <h1 className='font-extrabold text-4xl text-center'>Job Category List</h1>
           <p className='text-center my-3 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
           {
             jobItems && jobItems.map((jobItem,index)=><SingleJobItem jobItem={jobItem} key={index}></SingleJobItem>)
           }
           </div>
        </div>
    );
};

export default JobCat;