import React from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { useState } from "react";
import { opacityVariants } from "./../../../constants/variants.constant";
import SectionHeader from "./../../Elements/Logo/SectionHeader/SectionHeader";
import Container from "./../../Modules/Container/Container";
import Destination from "./../../../assets/steps/destination.svg";
import Payment from "./../../../assets/steps/payment.svg";
import Date from "./../../../assets/steps/date.svg";
import TopImage from "./../../../assets/steps/topImage.Webp";
import BottomImage from "./../../../assets/steps/bottomImage.Webp";
import StepItem from "./StepItem";
import { steps } from "./../../../constants/content";

const Steps = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 500 }}
      >
        <div className='my-20 scroll-mt-24 sm:scroll-mt-10' id='bookings'>
          <Container>
            <div className='grid md:grid-cols-2 gap-x-5 max-w-5xl mx-auto'>
              <motion.div
                animate={visible ? "visible" : "invisible"}
                variants={opacityVariants}
                initial='invisible'
                whileInView={() => setVisible(true)}
                transition={{ duration: 1 }}
                className='text-center'
              >
                <div>
                  <div className='text-left max-w-lg md:ml-auto mx-auto'>
                    <SectionHeader
                      title='Book your next trip  in 3 easy steps'
                      subtitle='Easy and Fast'
                    />
                  </div>
                  <StepsSection />
                </div>
              </motion.div>
              <ImageSection />
            </div>
          </Container>
        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Steps;

const StepsSection = () => {
  const Images = [Destination, Payment, Date];
  const [visible, setVisible] = useState(false);
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.5 },
    },
  };
  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <motion.div
        variants={container}
        animate={visible ? "show" : "hidden"}
        className='md:pt-20 py-10 mx-auto '
      >
        {steps.map((destination, i) => (
          <StepItem key={destination.title} {...destination} img={Images[i]} />
        ))}
      </motion.div>
    </ReactVisibilitySensor>
  );
};

const ImageSection = () => {
  const [visible, setVisible] = useState(false);
  const imageVariants = {
    topImage: {
      initial: {
        opacity: 0,
        x: 200,
        transition: {
          duration: 1,
        },
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
    },

    bottomImage: {
      initial: {
        opacity: 0,
        y: -200,
        transition: {
          duration: 1,
        },
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      },
    },
  };
  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => isVisible && setVisible(isVisible)}
      offset={{ bottom: 300 }}
    >
      <div className='relative min-h-[300px] md:h-full'>
        <motion.div
          className='absolute left-0 right-0 top-0 bottom-0 m-auto h-fit'
          variants={imageVariants.bottomImage}
          animate={visible ? "show" : "initial"}
        >
          <img src={BottomImage} className='rounded-xl shadow-lg mx-auto' loading="lazy" />
        </motion.div>
        <motion.div
          className='absolute top-32 bottom-0 h-fit  m-auto z-99 right-0'
          variants={imageVariants.topImage}
          animate={visible ? "show" : "initial"}
        >
          <img
            src={TopImage}
            className='rounded-xl shadow-xl scale-100    w-[250px] h-full object-contain'
            loading="lazy"
          />
        </motion.div>
      </div>
    </ReactVisibilitySensor>
  );
};
