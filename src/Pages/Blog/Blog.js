import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Akram Sakib - Portfolio</title>
      </Helmet>
      <div className="flex items-center dark:bg-gray-900 justify-center h-screen bg-gray-200">
        <div className="container">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-5 md:p-20 mx-2">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl dark:text-white">
                Coming<span className="text-indigo-600"> Soon</span>
              </h2>
              <p className="text-md md:text-xl mt-10 dark:text-white">
                <Link className="hover:underline" to="/">
                  Go to Home,
                </Link>{" "}
                In future we will work on this section
              </p>
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
              <div className="m-3">
                <a
                  href="https://www.facebook.com/akramSakibA"
                  title="Akram Sakib On Facebook"
                  className="md:w-32 bg-white tracking-wide dark:bg-gray-900 hover:dark:bg-indigo-600 dark:text-white text-gray-800 font-bold rounded border-2 border-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Facebook</span>
                </a>
              </div>
              <div className="m-3">
                <a
                  href="https://twitter.com/AkramSakib4"
                  title="Akram Sakib On Twitter"
                  className="md:w-32 bg-white tracking-wide dark:bg-gray-900 hover:dark:bg-indigo-600 dark:text-white text-gray-800 font-bold rounded border-2 border-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
