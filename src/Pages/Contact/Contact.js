import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Lottie from "react-lottie";
import ContactMe from "./../../Assets/SvgAnimations/contact.json";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    message: "",
  });
  console.log(values);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_0qurx2z",
        "template_68afoel",
        values,
        "user_o7O07d34s7XBqpunKdUtT"
      )
      .then(
        (res) => {
          console.log("Success", res);
        },
        (err) => {
          console.log("Error", err);
        }
      );
  };

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
        <div className="text-center mb-4">
          <p className="text-sm leading-7 dark:text-white text-gray-500 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-white">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
        </div>
        <div className="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <div className="lottie">
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </div>
          <div className="max-w-screen-md mx-auto p-5">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name="firstName"
                    placeholder="Jane"
                    onBlur={handleChange}
                  />
                  <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    onBlur={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                    for="grid-password"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    name="email"
                    placeholder="********@*****.**"
                    onBlur={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                    for="grid-password"
                  >
                    Your Message
                  </label>
                  <textarea
                    rows="10"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="message"
                    onBlur={handleChange}
                  ></textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                  <div className="md:flex md:items-center">
                    <label className="block text-gray-500 font-bold">
                      <input className="mr-2 leading-tight" type="checkbox" />
                      <span className="text-sm dark:text-white">
                        Send me your newsletter!
                      </span>
                    </label>
                  </div>
                  <button
                    className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                    onClick={handleSubmit}
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
