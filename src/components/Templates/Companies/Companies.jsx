import React from "react";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import Axon from "./../../../assets/companies/Group.svg"
import Expedia from "./../../../assets/companies/Jetstar logo.svg";
import Jetstar from "./../../../assets/companies/expedia.svg";
import Litalia from "./../../../assets/companies/Group.svg";
import Qantas from "./../../../assets/companies/Group (1).svg";
import {
  scaleVariants,
} from "./../../../constants/variants.constant";
import Container from "./../../Modules/Container/Container";
const Companies = () => {
  const Images = [Axon, Jetstar, Litalia, Qantas, Expedia];

  const [visible, setVisible] = useState(false);

  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <div className='my-20 scroll-mt-24 sm:scroll-mt-10' id='flights'>
          <Container>
            <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-x-5 max-w-6xl mx-auto items-center'>
              {Images.map((img, i) => (
                <motion.div
                  key={i}
                  variants={scaleVariants}
                  animate={visible ? "visible" : "invisible"}
                  transition={{ duration: 1 }}
                  className='h-[100px] flex items-center mx-auto'
                  
                >
                  {/* {svg} */}
                  {/* {img} */}
                  <img src={img} loading="lazy" />
                </motion.div>
              ))}
            </div>
          </Container>
        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Companies;
