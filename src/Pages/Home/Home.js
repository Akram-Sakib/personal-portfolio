import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Services from './Services/Services';

const Home = () => {
    return (
      <>
        <Helmet>
          <title>Akram Sakib - Home</title>
        </Helmet>
        <Banner/>
        <Services/>
        <Projects/>
      </>
    );
};

export default Home;