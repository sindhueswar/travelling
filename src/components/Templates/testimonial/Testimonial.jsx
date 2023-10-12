import React, { useRef } from 'react';
import Carousel, { CarouselItem } from './carousel/Carousel';
import dp1 from "./../../../assets/testimonials/profile1.Webp"
import dp2 from "./../../../assets/testimonials/profile2.Webp"
import dp3 from "./../../../assets/testimonials/profile3.Webp"
import SectionHeader from "./../../Elements/Logo/SectionHeader/SectionHeader";
const testimonialData = [
  {
    img: dp1,
    name: 'Mike Taylor',
    location: 'Lahore, Pakistan',
    testimony: "On the Windows talking painted pasture next. Of believed or diverted no."
  },
  {
    img: dp2,
    name: 'Daniel Elordi',
    location: 'Lagos, Nigeria',
    testimony: 'On the Windows talking painted pasture yOf believed or diverted no'
  },
  {
    img: dp3,
    name: 'Sharon Pierce',
    location: 'London, UN',
    testimony: 'On the Windows talking painted pasture yet  Of believed or diverted no'
  }
];

const Testimonial = () => {
  const sliderRef = useRef();


  return (
    <div className="flex flex-col lg:flex-row px-4 justify-items-center items-center section__padding mx-auto ">
      <div className="lg:w-1/2 text-center px-8 items-center justify-items-center">       
           <SectionHeader title='What People Say About Us' subtitle='Testimonials' />        
          
      </div>
      <div className="  lg:w-1/2  mt-8  relative  ">
        <Carousel ref={sliderRef}>
          {testimonialData.map((item, index) => (
            <CarouselItem img={item.img} location={item.location} name={item.name} testimony={item.testimony} key={item.name + index} />
          ))}
        </Carousel>
       
      </div>
    </div>
  );
};

export default Testimonial;









/*







import React, { useRef, useState } from 'react';
import Carousel, { CarouselItem } from './carousel/Carousel';
import Slider from 'react-slick'; // Import Slider component
import dp1 from './../../../assets/testimonials/profile1.Webp';
import dp2 from './../../../assets/testimonials/profile2.Webp';
import dp3 from './../../../assets/testimonials/profile3.Webp';
import SectionHeader from './../../Elements/Logo/SectionHeader/SectionHeader';

const testimonialData = [
  {
    img: dp1,
    name: 'Mike Taylor',
    location: 'Lahore, Pakistan',
    testimony: "On the Windows talking painted pasture next. Of believed or diverted no.",
  },
  {
    img: dp2,
    name: 'Daniel Elordi',
    location: 'Lagos, Nigeria',
    testimony: 'On the Windows talking painted pasture yOf believed or diverted no',
  },
  {
    img: dp3,
    name: 'Sharon Pierce',
    location: 'London, UN',
    testimony: 'On the Windows talking painted pasture yet  Of believed or diverted no',
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null); // Initialize with null
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row px-4 justify-items-center items-center section__padding mx-auto">
      <div className="lg:w-1/2 text-center px-8 items-center justify-items-center">
        <SectionHeader title="What People Say About Us" subtitle="Testimonials" />
      </div>
      <div className="lg:w-1/2 mt-8 relative">
        <Slider ref={sliderRef} afterChange={handleSlideChange}>
          {testimonialData.map((item, index) => (
            <CarouselItem
              img={item.img}
              location={item.location}
              name={item.name}
              testimony={item.testimony}
              key={item.name + index}
            />
          ))}
        </Slider>
        <div className="carousel-dots flex justify-center space-x-2 mt-4">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)} // Call the goToSlide function
              className={`dot h-4 w-4 rounded-full bg-gray-300 focus:outline-none ${
                currentSlide === index ? 'bg-blue-500' : 'hover:bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

*/
















