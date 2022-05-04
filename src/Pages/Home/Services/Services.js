import React from "react";
import service1 from "./../../../Assets/SvgAnimations/service1.json";
import service2 from "./../../../Assets/SvgAnimations/service2.json";
import service3 from "./../../../Assets/SvgAnimations/service3.json";
import Lottie from "react-lottie";

const servicesData = [
  {
    id: 1,
    title: "FRONTEND DEVELOPER",
    lottieOptions: {
      loop: true,
      autoplay: true,
      animationData: service1,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    description:
      "As a Front-End developer I have vast experience in making user-friendly web interfaces that help improve user experience and increase customer engagement.",
  },
  {
    id: 2,
    title: "BACKEND DEVELOPER",
    lottieOptions: {
      loop: true,
      autoplay: true,
      animationData: service2,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    description:
      "We provide backend development for various web and mobile apps.our back-end development team will provide you the best service to achieve your goals.",
  },
  {
    id: 3,
    title: "FULL STACK DEVELOPER",
    lottieOptions: {
      loop: true,
      autoplay: true,
      animationData: service3,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    description:
      "Be it Web application services or API development in any domain, our team of dedicated developers has expertise in delivering power-packed solutions.",
  },
];

const Services = () => {

  return (
    <section className="container mx-auto pb-20">
      <h2 className="my-12 text-5xl text-center tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
        Our
        <span className="text-indigo-600 dark:text-indigo-500"> Services</span>
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-stretch	 lg:items-stretch	">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-6 md:w-60 lg:w-auto lg:h-auto md:h-96"
          >
            <Lottie
              options={service?.lottieOptions}
              height={"50%"}
              width={"70%"}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl md:text-sm lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {service?.title}
              </h5>
              <p className="mb-3 lg:text-base	 font-normal md:text-xs text-gray-700 dark:text-gray-400">
                {service?.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Hire me
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
