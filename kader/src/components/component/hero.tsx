import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function Hero() {
  return (
    <div className="bg-{#1E1E1E} text-white h-screen">
      <header className="container mx-auto p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold max-md:text-2xl">Portfolio.</h1>
        <nav className="mb-4 space-x-2">
          <ul className="flex justify-center space-x-4 text-xl max-md:text-xs max-sm:hidden ">
            <li>
              <Link className="hover:text-gray-300" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="#">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="#">
                Work
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="container mx-auto p-6 flex flex-col lg:flex-row items-center justify-between mt-20">
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
            <div className="h-12 w-12 rounded-full  bg-white flex items-center justify-center">
              <FacebookIcon className="h-8 w-8 text-black" />
            </div>
            <div className="h-12 w-12 rounded-full  bg-white flex items-center justify-center">
              <InstagramIcon className="h-8 w-8 text-black" />
            </div>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            See More
          </Button>
        </div>
        <div className="w-1/2 flex justify-center items-center max-sm:w-1/2">
          <div className="relative -z-10 max-md:bottom-96 max-md:left-20  max-sm:hidden">
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
