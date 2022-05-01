import React from "react";
import "./Banner.css";
import Lottie from "react-lottie";
import developer from "./../../../Assets/SvgAnimations/developer.json";

const Banner = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: developer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="container mx-auto">
      <div className="flex flex-col lg:flex-row pt-20 px-6 lg:justify-between">
        <div>
          <h2 className="text-4xl text-left tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
            Web Application
            <span className="text-indigo-600 dark:text-indigo-500">
              {" "}
              Developer
            </span>
          </h2>
          <p className="mt-3 text-left text-3xl dark:text-white text-dark sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
            A passionate individual who always thrive to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact. I’m currently learning JavaScript more advance
          </p>
          <div className="flex flex-col">
            <div className="social-links my-8 lg:my-4">
              <a className="dark:text-white dark:bg-slate-700" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="dark:text-white dark:bg-slate-700" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="dark:text-white dark:bg-slate-700" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="dark:text-white dark:bg-slate-700" href="">
                <i className="fab fa-github"></i>
              </a>
              <a className="dark:text-white dark:bg-slate-700" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <button className="rounded w-24 bg-indigo-700 hover:bg-indigo-800 py-2 px-4 text-white">
              {" "}
              Resume
            </button>
          </div>
        </div>
        <div className="">
          <Lottie options={defaultOptions} height={"70%"} width={"100%"} />
        </div>
      </div>
    </section>
  );
};

export default Banner;