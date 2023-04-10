import React from 'react';

const SingleJobItem = ({jobItem}) => {
    console.log(jobItem)
    return (
        <div className='bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-md'>
            <img className='w-[55px] h-[55px] rounded-md mb-4' src={jobItem.logo} alt="" />
            <h1 className='text-[#474747] text-2xl font-semibold py-3'>{jobItem.name}</h1>
            <p className='text-[#A3A3A3]'> {jobItem.jobs_available} jobs available</p>
        </div>
    );
};

export default SingleJobItem;