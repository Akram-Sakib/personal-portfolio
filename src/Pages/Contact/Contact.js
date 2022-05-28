import React from "react";
import { Helmet } from "react-helmet-async";
import Lottie from "react-lottie";
import ContactMe from "./../../Assets/SvgAnimations/contact.json";

const Contact = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ContactMe,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Helmet>
        <title>Akram Sakib - Contact</title>
      </Helmet>
      <section className="contact_section py-12">
        <div class="text-center mb-4">
          <p class="text-sm leading-7 dark:text-white text-gray-500 font-regular uppercase">
            Contact
          </p>
          <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-white">
            Get In <span class="text-indigo-600">Touch</span>
          </h3>
        </div>
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <div className="lottie">
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </div>
          <div class="max-w-screen-md mx-auto p-5">
            <form class="w-full">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                    for="grid-password"
                  >
                    Email Address
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="********@*****.**"
                  />
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                    for="grid-password"
                  >
                    Your Message
                  </label>
                  <textarea
                    rows="10"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
                <div class="flex justify-between w-full px-3">
                  <div class="md:flex md:items-center">
                    <label class="block text-gray-500 font-bold">
                      <input class="mr-2 leading-tight" type="checkbox" />
                      <span class="text-sm dark:text-white">
                        Send me your newsletter!
                      </span>
                    </label>
                  </div>
                  <button
                    class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
