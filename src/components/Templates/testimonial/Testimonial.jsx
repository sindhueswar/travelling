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





















