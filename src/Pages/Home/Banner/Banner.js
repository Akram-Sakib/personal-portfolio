import React from "react";
import "./Banner.css";
import Lottie from "react-lottie";
import developer from "./../../../Assets/SvgAnimations/developer.json";
import {motion} from "framer-motion";
import { bannerLeftVariant, bannerRightVariant } from "../../../Animations/Animations";

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
      
      <div className="flex flex-col lg:flex-row pt-8 md:pt-16 lg:pt-20 px-6 lg:justify-between">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={bannerLeftVariant}
        >
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
            systems to create impact. I’m currently learning JavaScript more
            advance
          </p>
          <div className="flex flex-col">
            <div className="social-links my-8 lg:my-4">
              <a
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://www.facebook.com/akramSakibA"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
              <a
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://www.instagram.com/myself_saki_"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://twitter.com/AkramSakib4"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://github.com/Akram-Sakib"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://www.linkedin.com/in/akram-sakib-a7742a214/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <button className="rounded w-24 bg-indigo-700 hover:bg-indigo-800 py-2 px-4 text-white">
              {" "}
              Resume
            </button>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={bannerRightVariant}
          className="lg:w-1/3 md:w-3/4 md:mx-auto"
        >
          <Lottie options={defaultOptions} height={"70%"} width={"100%"} />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;