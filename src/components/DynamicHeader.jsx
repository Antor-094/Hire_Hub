import React from 'react';
import headerImage from "/Vector-1.png";
import headerImage2 from "/Vector.png";
const DynamicHeader = () => {
    return (
        <div class="relative bg-gradient-to-r from-indigo-100 to-purple-300 mt-0 w-full h-[300px]">
        <div
          class="absolute bottom-0 left-0 w-[250px] h-[200px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${headerImage2})` }}
        ></div>
        <div
          class="absolute -top-12 right-0 w-[250px] h-[200px] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${headerImage})` }}
        ></div>
        <div class="flex justify-center items-center h-full">
          <div class="text-black text-4xl font-bold ">Job Details</div>
        </div>
      </div>
    );
};

export default DynamicHeader;