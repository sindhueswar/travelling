// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import { motion } from 'framer-motion';

// import './Carousel.css'
// const Carousel = ({ children }) => {
//   const sliderRef = useRef();

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     arrows: false,
//     fade: true,
//   };

//   const next = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   const previous = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   return (
//     <motion.div
//       className="carousel-container flex  justify-between mx-auto px-2 "
//     >
//       <Slider {...settings} ref={sliderRef} className=" mx-auto ">
//         {children}
//       </Slider>
//       <div className="carousel-controls flex flex-col items-center justify-center  m-2 md:m-4 ">
//         <button onClick={previous} className="carousel-control bg-[#FFF1DA] rounded-full p-2 md:p-4 carousel-control-prev hover:bg-yellow-400 my-2 md:m-4">
//         <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M5.50001 1.30694e-07C5.9442 1.30694e-07 6.38839 0.219833 6.7247 0.651356L10.862 5.95987C11.046 6.19598 11.046 6.5868 10.862 6.82291C10.678 7.05903 10.3734 7.05903 10.1894 6.82291L6.05207 1.5144C5.74749 1.12359 5.25253 1.12359 4.94795 1.5144L0.810644 6.82291C0.626622 7.05903 0.322036 7.05903 0.138015 6.82291C-0.046006 6.5868 -0.046006 6.19598 0.138015 5.95987L4.27532 0.651356C4.61163 0.219833 5.05582 1.30694e-07 5.50001 1.30694e-07Z" fill="#292D32"/>
// </svg>

//         </button>
//         <button onClick={next} className="carousel-control  bg-[#FFF1DA] rounded-full p-2 md:p-4 carousel-control-next hover:bg-yellow-400 md:m-4">

//         <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M5.49999 7C5.0558 7 4.61161 6.78017 4.2753 6.34864L0.138016 1.04013C-0.0460053 0.804016 -0.0460053 0.413203 0.138016 0.177087C0.322037 -0.0590291 0.626624 -0.0590291 0.810645 0.177087L4.94793 5.4856C5.25251 5.87641 5.74747 5.87641 6.05205 5.4856L10.1894 0.177087C10.3734 -0.0590291 10.678 -0.0590291 10.862 0.177087C11.046 0.413203 11.046 0.804016 10.862 1.04013L6.72468 6.34864C6.38837 6.78017 5.94418 7 5.49999 7Z" fill="#292D32"/>
// </svg>
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default Carousel;

// export const CarouselItem = ({ img, location, name, testimony }) => (
// <motion.div
//   className="carousel-item relative rounded-xl  lg:mb-4 flex   flex-col gap-4 justify-start shadow  m-auto shawdow p-4"
// >
//   <img src={img} alt={name} className="w-20 h-20 rounded-full lg:bottom-4 bottom-3 right-4 overflow-hidden " loading="lazy" />
//   <div className="flex flex-col justify-center gap-6 w-fit">

//     <q className='text-primaryLight font-bold text-sm mb-5 inline-block font-poppins '>
//       {testimony}
//     </q>
//     <div className="flex flex-col gap-2">

//       <h4 className='text-primaryDark text-sm font-bold font-volkhov'>
//         {name}
//       </h4>

//       <p className='text-primaryDark text-sm font-bold font-volkhov'>
//         {location}
//       </p>
//     </div>
//   </div>
// </motion.div>

// );































// import React, { useRef } from "react";
// import Slider from "react-slick";
// import { motion, AnimatePresence } from "framer-motion";
// import "./Carousel.css";
// const Carousel = ({ children }) => {
//   const sliderRef = useRef();
  
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     arrows: false,
//     fade: true,
//     appendDots: (dots) => (
//       <ul className="flex m-4 absolute">
//         {dots}
//       </ul>
//     ),
   
//   };

//   const next = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   const previous = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   return (
//     <motion.div className="carousel-container flex  justify-between mx-auto px-2 ">
//       <AnimatePresence>
//         <Slider {...settings} ref={sliderRef} className=" mx-auto ">
//           {children}
//         </Slider>
//       </AnimatePresence>
//       <div className="carousel-controls flex flex-col items-center justify-center  m-2 md:m-4 ">
//         <button
//           onClick={previous}
//           className="carousel-control bg-[#FFF1DA] rounded-full p-2 md:p-4 carousel-control-prev hover:bg-yellow-400 my-2 md:m-4"
//         >
//           <svg
//             width="11"
//             height="7"
//             viewBox="0 0 11 7"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M5.50001 1.30694e-07C5.9442 1.30694e-07 6.38839 0.219833 6.7247 0.651356L10.862 5.95987C11.046 6.19598 11.046 6.5868 10.862 6.82291C10.678 7.05903 10.3734 7.05903 10.1894 6.82291L6.05207 1.5144C5.74749 1.12359 5.25253 1.12359 4.94795 1.5144L0.810644 6.82291C0.626622 7.05903 0.322036 7.05903 0.138015 6.82291C-0.046006 6.5868 -0.046006 6.19598 0.138015 5.95987L4.27532 0.651356C4.61163 0.219833 5.05582 1.30694e-07 5.50001 1.30694e-07Z"
//               fill="#292D32"
//             />
//           </svg>
//         </button>
//         <button
//           onClick={next}
//           className="carousel-control  bg-[#FFF1DA] rounded-full p-2 md:p-4 carousel-control-next hover:bg-yellow-400 md:m-4"
//         >
//           <svg
//             width="11"
//             height="7"
//             viewBox="0 0 11 7"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M5.49999 7C5.0558 7 4.61161 6.78017 4.2753 6.34864L0.138016 1.04013C-0.0460053 0.804016 -0.0460053 0.413203 0.138016 0.177087C0.322037 -0.0590291 0.626624 -0.0590291 0.810645 0.177087L4.94793 5.4856C5.25251 5.87641 5.74747 5.87641 6.05205 5.4856L10.1894 0.177087C10.3734 -0.0590291 10.678 -0.0590291 10.862 0.177087C11.046 0.413203 11.046 0.804016 10.862 1.04013L6.72468 6.34864C6.38837 6.78017 5.94418 7 5.49999 7Z"
//               fill="#292D32"
//             />
//           </svg>
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default Carousel;

// export const CarouselItem = ({ img, location, name, testimony }) => (
//   <AnimatePresence>
//     <motion.div
//       className="carousel-item relative rounded-xl lg:mb-4 flex flex-col gap-4 justify-start shadow m-auto shawdow p-4"
//       exit={{ opacity: 0, transform: "rotateY(180deg)" }}
//     >
//       <img
//         src={img}
//         alt={name}
//         className="w-20 h-20 rounded-full lg:bottom-4 bottom-3 right-4 overflow-hidden"
//         loading="lazy"
//       />
//       <div className="flex flex-col justify-center gap-6 w-fit">
//         <q className="text-primaryLight font-bold text-sm mb-5 inline-block font-poppins ">
//           {testimony}
//         </q>
//         <div className="flex flex-col gap-2">
//           <h4 className="text-primaryDark text-sm font-bold font-volkhov">
//             {name}
//           </h4>
//           <p className="text-primaryDark text-sm font-bold font-volkhov">
//             {location}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   </AnimatePresence>
// );
































//stacked 








import React, { useRef } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "./Carousel.css";

const Carousel = ({ children }) => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    fade: true,
    centerMode: true, // Enable center mode for stacking effect
    centerPadding: "0",
  variableWidth: true, // Allow variable width items
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <motion.div className="carousel-container flex justify-between mx-auto px-2">
      <AnimatePresence>
        <Slider {...settings} ref={sliderRef} className="mx-auto">
          {children}
        </Slider>
      </AnimatePresence>
      <div className="carousel-controls flex flex-col items-center justify-center m-2 md:m-4">
        <button
          onClick={previous}
          className="carousel-control bg-[#FFF1DA] rounded-full p-2 md:p-4 carousel-control-prev hover:bg-yellow-400 my-2 md:m-4"
        >
         
        </button>
        <button
          onClick={next}
          className="carousel-control bg-[#FFF1DA] rounded-full p-2 md:p-4 carousel-control-next hover-bg-yellow-400 md:m-4"
        >
        
        </button>
      </div>
    </motion.div>
  );
};

export default Carousel;

export const CarouselItem = ({ img, location, name, testimony }) => (
  <AnimatePresence>
    <motion.div
      className="carousel-item relative rounded-xl lg:mb-4 flex flex-col gap-4 justify-start shadow m-auto shawdow p-4"
      exit={{ opacity: 0, transform: "rotateY(180deg)" }}
    >
      <img
        src={img}
        alt={name}
        className="w-20 h-20 rounded-full lg:bottom-4 bottom-3 right-4 overflow-hidden"
        loading="lazy"
      />
      <div className="flex flex-col justify-center gap-6 w-fit">
        <q className="text-primaryLight font-bold text-sm mb-5 inline-block font-poppins ">
          {testimony}
        </q>
        <div className="flex flex-col gap-2">
          <h4 className="text-primaryDark text-sm font-bold font-volkhov">
            {name}
          </h4>
          <p className="text-primaryDark text-sm font-bold font-volkhov">
            {location}
          </p>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
