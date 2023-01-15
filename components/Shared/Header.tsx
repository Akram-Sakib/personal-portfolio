import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineInfoCircle,
  AiOutlineContacts,
} from "react-icons/ai";
import { ImBlog } from "react-icons/im";

import logo from "./../../assets/Images/logo.svg";
// import ThemeToggle from "./Theme/ThemeToggle/ThemeToggle";
import { IconContext } from "react-icons/lib";

type Props = {};

export default function Header({}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative z-50 bg-white dark:bg-slate-900 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center transition-all dark:border-slate-700 border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <motion.div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <Image
                  className="h-8 lg:w-40 md:w-32 sm:w-28"
                  src={logo}
                  alt="Logo"
                />
              </Link>
            </motion.div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen((prevState) => !prevState)}
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

                <Link href="/">
                  <span
                    className="
                   group dark:hover:text-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8'
                  "
                  >
                    Home
                  </span>
                </Link>
              </div>
              <Link /* */ href="/portfolio">
                <span className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900">
                  Portfolio
                </span>
              </Link>
              <div className="relative">
                <Link href="/blog">
                  <span className="group dark:hover:text-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900">
                    Blog
                  </span>
                </Link>
              </div>
              <Link href="/about">
                <span className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900">
                  About
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900">
                  Contact
                </span>
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {/* <ThemeToggle /> */}
              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/1ZBioCcrhS1JKp-6Azu61jH2RSeBtu_bB/view?usp=sharing"
                target="_blank"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  {/* <Image
                    height={20}
                    width={20}
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen((prevState) => !prevState)}
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
                  <Link
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
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
                  </Link>
                  <Link
                    href="/portfolio"
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
                  </Link>
                  <Link
                    href="/blog"
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
                  </Link>
                  <Link
                    href="/about"
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
                  </Link>
                  <Link
                    href="/contact"
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
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://drive.google.com/file/d/13InTZi1mAYqxdHQrN-NfIP-fr_BgEcip/view?usp=sharing"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
