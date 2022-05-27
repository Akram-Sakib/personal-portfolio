import React from "react";
import { Helmet } from "react-helmet-async";
import "./About.css";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Akram Sakib - About</title>
      </Helmet>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Web Application Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Hey there! I'm a <del>dragon lost in human world</del> Computer
              Science master's student at Boston University. Before that, I got
              my bachelor's degree in Software Engineering at Tongji University.
              I'm trying to find a balance between research and engineering. My
              research interests lie primarily in exploring the capability of
              machines to be continual and efficient, like meta-learning,
              few-shot learning and continual learning. I'm also working on
              multi-modal retrieval for my internship. I'm also learning to
              build machine learning softwares and systems. I'm also learning
              TypeScript, React and Vue.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Resume
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://i.ibb.co/0F27pVK/Akram-Sakib.png"
            />
          </div>
        </div>
      </section>
      <section className="edu_cation">
        <div className="educationWrapper">
          <div className="workheading">Education</div>

          <div className="timeline">
            <ul>
              <li>
                <div className="content">
                  <h3>Junior Dakhil Certificate</h3>
                  <p>Fulmati Islamia Alim Madrasah</p>
                  <p>Completed JDC From Fulmati Madrasah</p>
                </div>
                <div
                  className="time"
                  style={{
                    border: `2px solid #E2E8F0`,
                    color: "#263859",
                  }}
                >
                  <h4>Jan - Dec 2018</h4>
                </div>
              </li>
              <li>
                <div className="content">
                  <h3>Secondary School Certificate</h3>
                  <p>Fulmati Islamia Alim Madrasah</p>
                  <p>Completed SSC From Fulmati Madrasah</p>
                </div>
                <div
                  className="time"
                  style={{
                    border: `2px solid #E2E8F0`,
                    color: "#263859",
                  }}
                >
                  <h4>Jan - Fab 2019 - 2020</h4>
                </div>
              </li>
              <li>
                <div className="content">
                  <h3>Computer Technology</h3>
                  <p>Dhaka Polytechnic Institute</p>
                  <p>Currently I am studying in Dhaka Polytechnic Institute</p>
                </div>
                <div
                  className="time"
                  style={{
                    border: `2px solid #E2E8F0`,
                    color: "#263859",
                  }}
                >
                  <h4>Sep - May 2022</h4>
                </div>
              </li>
              <div style={{ clear: "both" }}></div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
