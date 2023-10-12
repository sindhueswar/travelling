/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { motion } from "framer-motion";
// import { BsFillPlayCircleFill } from "react-icons/bs";
import HeadingDecor from "../../../../../assets/heroSection/heading-decor.svg";
import ReactVisibilitySensor from "react-visibility-sensor";

const LeftContent = () => {
  const [visible, setVisible] = useState(false);
  const translateVariants = {
    invisible: {
      x: -500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <ReactVisibilitySensor
      partialVisibility
      offset={{ top: 400 }}
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
    >
      <div className="">
        <motion.div
          initial="invisible"
          animate={visible ? "visible" : "invisible"}
          variants={translateVariants}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <div className="text-[#DF6951] text-left font-bold uppercase lg:text-xl py-5 font-poppins">
            Best Destinations around the world
          </div>
          <div className="text-[#181E4B] text-left font-bold  text-[2.5rem] lg:text-[4rem] font-volkhov lg:leading-[5rem]">
            Travel,{" "}
            <div className="inline-block w-fit md:relative">
              <span
              //  className="bg-local bg-no-repeat"               style={{backgroundImage: `url(${HeadingDecor})`, backgroundPosition: 'center bottom', }}
               >enjoy</span>
              <img
                src={HeadingDecor}
                alt="Heading decor"
                className="absolute w-1/2 md:w-full  "
                loading="lazy"
              />
            </div>
            and live a new and full life
          </div>
          <p className="text-primaryLight text-sm lg:text-lg font-semibold text-left md:w-[500px] py-5 lg:py-10 font-poppins tracking-wide">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="lg:flex justify-center items-center p-2 sm:w-96 md:w-80 lg:w-96 xl:w-96 md:flex  gap-x-4 pl-0">
            <button className=" bg-yellow-500 hover:scale-105 hover:bg-yellow-400 font-google-sans font-medium text-white text-base  text-center cursor-pointer  rounded-lg mr-4 w-44 h-14 duration-700">
              Find out more
            </button>
            <button className=" p-2 bg-transparent lg:flex  justify-between hover:xl font-medium text-gray-700 text-lg leading-10  cursor-pointer rounded-lg w-44 h-14  flex items-center ">
            
              <svg width="352" height="122" viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce  fill-[#DF6951] ">
<g filter="url(#filter0_d_1_131)">
<circle cx="56" cy="41" r="26" fill="#DF6951"/>
</g>
<path d="M64 42.5L52.75 48.9952L52.75 36.0048L64 42.5Z" fill="white"/>
<defs>
<filter id="filter0_d_1_131" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="15"/>
<feGaussianBlur stdDeviation="15"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.87451 0 0 0 0 0.411765 0 0 0 0 0.317647 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_131"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_131" result="shape"/>
</filter>
</defs>
</svg>

              <p className="ml-1 flex flex-wrap content-center whitespace-nowrap font-poppins ">
              <span className="w-0 h-0 rounded bg-purple-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
  <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                Play Demo
               </span>
              </p>
            </button>
          </div>
        </motion.div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default LeftContent;
