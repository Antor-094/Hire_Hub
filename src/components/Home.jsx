import React from 'react';
import Header from './Header';
import JobCat from './JobCat';
import FeaturedJob from './FeaturedJob';

const Home = () => {
    
    return (
        <div>
        <Header></Header>
        <JobCat></JobCat>
        <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;