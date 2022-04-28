import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Helmet } from "react-helmet";
import Banner from './Banner/Banner';

const Home = () => {
    return (
      <>
        <Helmet>
          <title>Akram Sakib - Home</title>
        </Helmet>
        <Navbar />
        <Banner/>
      </>
    );
};

export default Home;