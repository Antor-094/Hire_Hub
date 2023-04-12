import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <div className='' style={{
        backgroundImage: `linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)`,
      }}>
         <div className="flex flex-col-reverse md:flex-row gap-16 -mt-0  
        md:w-[80%] md:mx-auto  justify-center items-center">
      <div className="text-center md:text-left p-2">
        <p className="font-medium md:text-7xl text-4xl mb-5 ">
          One Step <br /> Closer To Your <br />
          <span className="text-main">Dream Job</span>
        </p>
        <p className="mb-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Link className="btn-main">Get Started</Link>
      </div>
      <div>
        <img src="P3OLGJ1 copy 1.png" alt="" />
      </div>
    </div>
       </div>
    );
};

export default Header;