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
           <div class="flex items-center lg:gap-6 gap-3 cursor-pointer"><span class="relative flex h-14 w-14"><span class="animate-ping absolute inline-flex h-full w-full rounded-full  bg-[#DF6951] opacity-75"></span><span class="relative flex justify-center items-center text-white rounded-full h-14 w-14 bg-[#DF6951]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path></svg></span></span><button type="button" class="outline-none border-none hover:text-[#DF6951] hover:scale-110 transition duration-200 ease-in-out">Play Demo</button></div>
          </div>
        </motion.div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default LeftContent;
