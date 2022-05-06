import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Testimonial from "./Testimonial/Testimonial";
import Services from './Services/Services';
import Projects from './Projects/Projects';

const Home = () => {
    return (
      <>
        <Helmet>
          <title>Akram Sakib - Home</title>
        </Helmet>
        <Banner/>
        <Services/>
        <Testimonial/>
        <Projects/>
      </>
    );
};

export default Home;