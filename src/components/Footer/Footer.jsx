import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <div className="w-full h-auto absolute top-[4200px] lg:top-[3400px] xl:top-[3000px]">
          <div className="w-full h-full bg-cyan-800 sm:flex sm:flex-wrap sm:justify-center p-6 py-24 block">
            <div className=" h-auto w-full sm:basis-1/2 lg:m-6 lg:basis-1/3">
              <h1 className="text-white text-xl font-bold"> ABOUT ME </h1>
              <p className="py-6 text-gray-400 text-sm">
                Do you want to be even more successful? Learn to love learning
                and growth. The more effort you put into improving your skills{" "}
              </p>
              <p className="text-gray-400 text-sm">
                Copyright 2024 All rights reserved | this template is made with
                by{" "}
                <a href="" className="text-cyan-400">
                  Emaad
                </a>
              </p>
            </div>
            <div className=" h-auto w-full sm:basis-1/2 lg:basis-1/4 lg:m-6">
              <h1 className="text-white text-xl font-bold pt-3">NEWSLETTER</h1>
              <p className="py-6 text-gray-400 text-sm">
                {" "}
                Stay updated with our latest trends
              </p>
              <div className="relative sm:w-4/5 lg:w-full">
                <input
                  type="text"
                  className="w-full h-10 rounded-sm outline-none p-4 text-sm text-gray-300 "
                  placeholder="Enter Email Address"
                />
                <div className="w-10 h-10 absolute top-0 right-0 bg-gradient-to-r from-sky-500 to-indigo-500">
                  <button className="pl-3 w-10 h-10">
                    <FaArrowRightLong className="text-white" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/5 h-auto lg:m-6 msm:w-full mt-4 lg:basis-1/5">
              <h1 className="text-white text-xl font-bold">FOLLOW ME</h1>
              <p className="py-6 text-gray-400 text-sm">let us be social</p>
              <div className="w-full h-auto flex flex-wrap gap-4">
                <a href="#" className="">
                  <FaFacebookF className="text-gray-500 transition ease-in-out delay-100 hover:text-cyan-400 duration-100" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 transition ease-in-out delay-100 hover:text-cyan-400 duration-100"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-500 transition ease-in-out delay-100 hover:text-cyan-400 duration-100"
                >
                  <FaDribbble />
                </a>
                <a
                  href="#"
                  className="text-gray-500 transition ease-in-out delay-100 hover:text-cyan-400 duration-100"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Footer;
