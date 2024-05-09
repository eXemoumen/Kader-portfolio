"use client";

import { Button } from "@/components/ui/button";
import { Link } from 'react-scroll';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";


export function Hero() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const ClickHandler = () => {
    setToggle(!toggle);
  };

  const isActive = (path: any) => {
    return pathname === path; // Check if the path is the current route
  };
  return (
    <div className="bg-[#1E1E1E] text-white h-screen max-sm:h-[100vh]" id="home">
      <header className="container mx-auto p- flex justify-between items-center">
        <nav className="bg-[#1E1E1E] border-gray-200  flex items-center justify-between  ">
          <div className="w-[89vw] flex flex-wrap items-center justify-between mx-auto p-6 max-sm:w-[89vw]">
            <img
              src="/MY-LOGO.png"
              alt="Si Bachir Abd El Kader"
              className=" h-16 w-16 flex items-center space-x-3 rtl:space-x-reverse"
            ></img>
            <button
              onClick={ClickHandler}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* SVG for hamburger menu icon */}
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${
                toggle ? "block" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="font-medium flex justify-around max-sm:p-0 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#1E1E1E] dark:bg-[#1E1E1E] md:dark:bg-[#1E1E1E] dark:border-gray-700">
                {/* <li>
                  <Link
                    to="home"
                    smooth={true}
                    className={`${
                      isActive("/") ? "underline" : ""
                    } underline-offset-8 py-2 px-3 text-white bg-[#1E1E1E] rounded md:p-0`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    className={`${
                      isActive("/challenges") ? "underline" : ""
                    } hover:underline underline-offset-8 py-2 px-3 text-white bg-[#1E1E1E] rounded md:p-0 `}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="service"
                    smooth={true}
                    className={`${
                      isActive("/about") ? "underline" : ""
                    } hover:underline underline-offset-8 py-2 px-3 text-white bg-[#1E1E1E] rounded md:p-0 `}
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="project"
                    smooth={true}
                    className={`${
                      isActive("/about") ? "underline" : ""
                    } hover:underline underline-offset-8 py-2 px-3 text-white bg-[#1E1E1E] rounded md:p-0 `}
                  >
                    Project
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    className={`${
                      isActive("/about") ? "underline" : ""
                    } hover:underline underline-offset-8 py-2 px-3 text-white bg-[#1E1E1E] rounded md:p-0 `}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between mt-10 max-sm:mt-10 ">
        <div className="space-y-6 w-1/2 max-md:w-[90%] max-sm:w-5/6 ">
          <h2 className="text-4xl font-bold max-sm:text-2xl">Hello, I am</h2>
          <h1 className="text-6xl font-extrabold max-sm:text-3xl">
            Si Bachir Abd El Kader
          </h1>
          <p className="text-lg max-sm:text-base">
            specializing in designing captivating visuals.
            <br />
            with a keen eye for detail and a passion for creativity,
          </p>
          <p className="font-bold max-sm:text-xs">Welcome To My Portfolio.</p>
          <div className="flex space-x-4">
            <div className="h-12 w-12 rounded-full  bg-white flex items-center justify-center">
              <TwitterIcon className="h-8 w-8 text-black  " />
            </div>
            <div className="h-12 w-12 rounded-full  bg-white flex items-center justify-center">
              <YoutubeIcon className="h-8 w-8 text-black" />
            </div>
            <a href="https://m.facebook.com/profile.php?id=100039589643618">
              <div className="h-12 w-12 rounded-full  bg-white flex items-center justify-center">
                <FacebookIcon className="h-8 w-8 text-black" />
              </div>
            </a>

            <a href="https://www.instagram.com/kdr.4s?igsh=ejd1Zmlrazl1b3F2">
              {" "}
              <div className="h-12 w-12 rounded-full  bg-white flex items-center justify-center">
                <InstagramIcon className="h-8 w-8 text-black" />
              </div>
            </a>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <a href="#service">See More</a>
          </Button>
        </div>
        <div className="w-1/2  flex justify-center items-center max-sm:w-1/2">
          <div className="relative  max-md:-z-10 max-md:bottom-96 max-md:left-20  max-sm:hidden">
            <div className="absolute w-{515px} h-{515px} -inset-1 bg-purple-600 rounded-full " />
            <img
              alt="Si Bachir Abd El Kader"
              className="relative"
              height="406.32"
              width="506"
              src="/hero.png"
              style={{
                objectFit: "cover",
                aspectRatio: "500/500",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
