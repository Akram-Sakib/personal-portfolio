import React from 'react';
import ThemeToggle from "../Theme/ThemeToggle/ThemeToggle";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineInfoCircle,
  AiOutlineContacts,
} from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import { ImBlog } from "react-icons/im";
import logo from "./../../../Assets/Images/logo.svg";
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import { motion } from 'framer-motion';
import { navAnimationLogo, navAnimationMenu1, navAnimationMenu2, navAnimationMenu3, navAnimationMenu4, navAnimationMenu5 } from '../../../Animations/Animations';

const Navbar = () => {
  
  const [open, setOpen] = React.useState(false);

    return (
      <>
        {/* This example requires Tailwind CSS v2.0+ */}
        <div className="relative z-50 bg-white dark:bg-slate-900 transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center transition-all dark:border-slate-700 border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={navAnimationLogo}
                className="flex justify-start lg:w-0 lg:flex-1"
              >
                <Link to="/">
                  <img
                    className="h-8 lg:w-40 md:w-32 sm:w-28"
                    src={logo}
                    alt=""
                  />
                </Link>
              </motion.div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex space-x-10">
                <div className="relative">
                  {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}

                  <NavLink to="/" activeclassname="active">
                    <span
                      className="
                   group dark:hover:text-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8'
                  "
                    >
                      Home
                    </span>
                  </NavLink>
                </div>
                <NavLink activeclassname="active" to="/portfolio">
                  <span
                    className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900"
                  >
                    Portfolio
                  </span>
                </NavLink>
                <div className="relative">
                  <NavLink activeclassname="active" to="/blog">
                    <span
                      className="group dark:hover:text-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900"
                    >
                      Blog
                    </span>
                  </NavLink>
                </div>
                <NavLink activeclassname="active" to="/about">
                  <span
                    className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900"
                  >
                    About
                  </span>
                </NavLink>
                <NavLink activeclassname="active" to="/contact">
                  <span
                    className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900"
                  >
                    Contact
                  </span>
                </NavLink>
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <ThemeToggle />
                <a
                  href="/hello"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
          {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

          <div
            className={
              open
                ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="/hello"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/chart-bar */}
                      {/* <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg> */}
                      <IconContext.Provider
                        value={{
                          className: "text-2xl text-indigo-600",
                        }}
                      >
                        <AiOutlineHome />
                      </IconContext.Provider>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Home
                      </span>
                    </a>
                    <a
                      href="/hello"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/cursor-click */}
                      <IconContext.Provider
                        value={{
                          className: "text-2xl text-indigo-600",
                        }}
                      >
                        <AiOutlineProject />
                      </IconContext.Provider>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Porfolio
                      </span>
                    </a>
                    <a
                      href="/hello"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/shield-check */}
                      <IconContext.Provider
                        value={{
                          className: "text-2xl text-indigo-600",
                        }}
                      >
                        <ImBlog />
                      </IconContext.Provider>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Blog
                      </span>
                    </a>
                    <a
                      href="/hello"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/view-grid */}
                      <IconContext.Provider
                        value={{
                          className: "text-2xl text-indigo-600",
                        }}
                      >
                        <AiOutlineInfoCircle />
                      </IconContext.Provider>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        About
                      </span>
                    </a>
                    <a
                      href="/hello"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      {/* Heroicon name: outline/refresh */}
                      <IconContext.Provider
                        value={{
                          className: "text-2xl text-indigo-600",
                        }}
                      >
                        <AiOutlineContacts />
                      </IconContext.Provider>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Contact
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="/hello"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Navbar;