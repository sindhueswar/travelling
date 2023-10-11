import React from "react";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import {
  bounceVariants,
  opacityVariants,
} from "../../../constants/variants.constant";
import Container from "../Container/Container";
import { motion } from "framer-motion";


const Footer = () => {
  const variant = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.5 },
    },
  };

  const titleVariant = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Careers", "Mobile"],
    },
    {
      title: "Contact",
      links: ["Help/FAQ", "Press", "Affilates"],
    },
    {
      title: "More",
      links: ["Airlinefees", "Airline", "Low fare tips"],
    },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ReactVisibilitySensor
        partialVisibility
        onChange={(isVisible) => isVisible && setVisible(isVisible)}
        offset={{ bottom: 300 }}
      >
        <div className='py-20'>
          <Container>
            <motion.div
              animate={visible ? "visible" : "invisible"}
              variants={opacityVariants}
              initial='invisible'
              whileInView={() => setVisible(true)}
              transition={{ duration: 0.5 }}
              className='text-center max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-y-8  mx-auto'
            >
              <div className='col-span-1'>
                <h4 className='text-primary text-4xl font-bold mb-5'>Jadoo.</h4>
                <p className='text-primaryLight font-semibold'>
                  Book your trip in minute, get full Control for much longer.
                </p>
              </div>
              <div className='grid grid-cols-3 col-span-2'>
                {footerLinks.map(({ title, links }) => (
                  <motion.div
                    key={title}
                    variants={variant}
                    animate={visible ? "show" : "hidden"}
                  >
                    <motion.div
                      variants={titleVariant}
                      className='text-[#080809] font-bold text-lg mb-3'
                    >
                      {title}
                    </motion.div>
                    {links.map((link, i) => (
                      <motion.div
                        className='group text-primaryLight font-semibold py-1 w-fit mx-auto cursor-pointer'
                        key={i}
                        variants={{
                          hidden: {
                            y: 200,
                            opacity: 0,
                          },
                          show: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              duration: 1,
                            },
                          },
                        }}
                      >
                        {link}
                        <div className='bg-primaryLight w-0 transition-all duration-300 h-[1px] group-hover:w-full'></div>
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </div>
              <div className='col-span-1'>
                <div className='flex items-start justify-center'>
                  <motion.div
                    className='bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2'
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1 }}
                  >
                 <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9544 10.6092L15.7852 7.1936H10.5987V4.98129C10.5987 4.04969 11.3265 3.13746 13.6428 3.13746H16V0.2329C16 0.2329 13.8576 0 11.808 0C7.53418 0 4.74586 1.63675 4.74586 4.59297V7.1936H0V10.6092H4.74586V18.8575C5.69941 18.9543 6.6727 19 7.66717 19C8.66164 19 9.63493 18.9483 10.5885 18.8575V10.6092H14.9544Z" fill="black"/>
</svg>





                  </motion.div>
                  <motion.div
                    className='bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2'
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1, delay: 1 }}
                  >

                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.50212 4.62864C6.8063 4.62864 4.63185 6.80358 4.63185 9.5C4.63185 12.1964 6.8063 14.3714 9.50212 14.3714C12.1979 14.3714 14.3724 12.1964 14.3724 9.5C14.3724 6.80358 12.1979 4.62864 9.50212 4.62864ZM9.50212 12.667C7.76001 12.667 6.33581 11.2467 6.33581 9.5C6.33581 7.75326 7.75577 6.33298 9.50212 6.33298C11.2485 6.33298 12.6684 7.75326 12.6684 9.5C12.6684 11.2467 11.2442 12.667 9.50212 12.667ZM15.7076 4.42938C15.7076 5.06108 15.1989 5.5656 14.5716 5.5656C13.94 5.5656 13.4356 5.05684 13.4356 4.42938C13.4356 3.80191 13.9443 3.29315 14.5716 3.29315C15.1989 3.29315 15.7076 3.80191 15.7076 4.42938ZM18.9332 5.58256C18.8612 4.06053 18.5136 2.71232 17.3988 1.60153C16.2883 0.49074 14.9404 0.143088 13.4187 0.0667745C11.8504 -0.0222582 7.14964 -0.0222582 5.58132 0.0667745C4.06386 0.138849 2.71595 0.4865 1.60117 1.59729C0.486392 2.70808 0.143056 4.05629 0.0667596 5.57832C-0.0222532 7.14699 -0.0222532 11.8488 0.0667596 13.4174C0.138818 14.9395 0.486392 16.2877 1.60117 17.3985C2.71595 18.5093 4.05962 18.8569 5.58132 18.9332C7.14964 19.0223 11.8504 19.0223 13.4187 18.9332C14.9404 18.8612 16.2883 18.5135 17.3988 17.3985C18.5094 16.2877 18.8569 14.9395 18.9332 13.4174C19.0223 11.8488 19.0223 7.15123 18.9332 5.58256ZM16.9071 15.1006C16.5765 15.9316 15.9365 16.5717 15.1015 16.9067C13.851 17.4027 10.8839 17.2882 9.50212 17.2882C8.1203 17.2882 5.14897 17.3985 3.90279 16.9067C3.072 16.576 2.43196 15.9358 2.0971 15.1006C1.60117 13.8499 1.71562 10.8821 1.71562 9.5C1.71562 8.11787 1.60541 5.14588 2.0971 3.89942C2.42772 3.06845 3.06776 2.42826 3.90279 2.09333C5.15321 1.59729 8.1203 1.71176 9.50212 1.71176C10.8839 1.71176 13.8553 1.60153 15.1015 2.09333C15.9322 2.42402 16.5723 3.06421 16.9071 3.89942C17.4031 5.15012 17.2886 8.11787 17.2886 9.5C17.2886 10.8821 17.4031 13.8541 16.9071 15.1006Z" fill="#080809"/>
</svg>

                  </motion.div>
                  <motion.div
                    className='bg-white rounded-full shadow-[0_2px_10px_0px_rgba(0,0,0,0.1)] p-4 mx-2'
                    variants={bounceVariants}
                    animate={visible && "start"}
                    transition={{ duration: 1, delay: 2 }}
                  >

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#080809" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2_5)">
<path d="M19.6278 2.28298C18.9399 2.66457 18.201 2.92253 17.4241 3.03848C18.217 2.44499 18.8244 1.50452 19.1112 0.385201C18.358 0.944383 17.5337 1.33805 16.6741 1.54909C15.9746 0.617038 14.9771 0.0351238 13.8734 0.0351238C11.7551 0.0351238 10.0372 2.18171 10.0372 4.83115C10.0372 5.20655 10.071 5.57278 10.136 5.92441C6.94718 5.72408 4.12006 3.81472 2.22773 0.913443C1.8973 1.62202 1.70817 2.44586 1.70817 3.32486C1.70817 4.98858 2.38561 6.45649 3.41498 7.31636C2.80561 7.29275 2.20962 7.08715 1.67682 6.71674V6.77735C1.67682 9.10129 2.99917 11.0391 4.75452 11.4798C4.43207 11.5902 4.09367 11.6479 3.74358 11.6479C3.49605 11.6479 3.25591 11.6186 3.02131 11.5635C3.50957 13.4682 4.92657 14.8547 6.60506 14.8939C5.29192 16.1806 3.6373 16.9477 1.8402 16.9477C1.53067 16.9477 1.22476 16.9246 0.924438 16.8793C2.62269 18.2405 4.63908 19.0351 6.80593 19.0351C13.863 19.0351 17.7225 11.727 17.7225 5.38936C17.7225 5.18129 17.7189 4.97477 17.7109 4.769C18.4628 4.08912 19.1119 3.24731 19.6278 2.28298Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2_5">
<rect width="19" height="19" fill="white" transform="translate(0.924438 0.0351238)"/>
</clipPath>
</defs>
</svg>

                  </motion.div>
                </div>
                <div className='text-primaryLight text-lg font-semibold my-3'>
                  Discover our app
                </div>
                <div className='flex items-center gap-x-4'>
                  <div className='bg-black flex items-center px-2 py-3 justify-center gap-x-2 rounded-3xl w-full'>

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_521)">
<path d="M11.5075 10.0018L1.46393 19.673C0.993605 19.3516 0.714365 18.817 0.719303 18.2473V1.75626C0.714365 1.18663 0.993605 0.65199 1.46393 0.330566L11.5075 10.0018Z" fill="#2196F3"/>
<path d="M15.0217 6.62364L11.5074 10.0018L1.46387 0.330532C1.50171 0.301203 1.54113 0.273918 1.58191 0.248803C2.11272 -0.0729183 2.77574 -0.0833047 3.31639 0.22156L15.0217 6.62364Z" fill="#4CAF50"/>
<path d="M19.2806 10.0017C19.2872 10.6447 18.9377 11.2387 18.3725 11.5454L15.0217 13.3798L11.5073 10.0017L15.0217 6.62354L18.3725 8.45788C18.9377 8.76462 19.2872 9.3586 19.2806 10.0017Z" fill="#F0BB1F"/>
<path d="M15.0217 13.3801L3.31639 19.7822C2.77455 20.0823 2.11404 20.0719 1.58191 19.7549C1.54113 19.7298 1.50171 19.7025 1.46387 19.6732L11.5074 10.002L15.0217 13.3801Z" fill="#F15A2B"/>
</g>
<defs>
<clipPath id="clip0_1_521">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

                    <div className='text-white '>
                      <div className='text-[12px]'>Google Play</div>
                    </div>
                  </div>
                  <div className='bg-black  items-center flex px-2 py-3 justify-center gap-x-2 rounded-3xl w-full'>
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_8_8)">
<path d="M17.2826 10.871C17.2726 9.23767 18.1008 8.00492 19.7772 7.09704C18.8392 5.89989 17.4223 5.24123 15.5513 5.11217C13.7802 4.98756 11.8444 6.0334 11.1359 6.0334C10.3875 6.0334 8.67122 5.15667 7.32413 5.15667C4.54015 5.19673 1.58154 7.13709 1.58154 11.0846C1.58154 12.2506 1.82103 13.4551 2.29999 14.6983C2.93861 16.3316 5.24363 20.3369 7.64843 20.2702C8.90571 20.2435 9.79379 19.4735 11.4303 19.4735C13.0168 19.4735 13.84 20.2702 15.242 20.2702C17.6668 20.239 19.7523 16.5986 20.3609 14.9609C17.108 13.5946 17.2826 10.9555 17.2826 10.871ZM14.4587 3.56344C15.8208 2.12152 15.696 0.808654 15.6561 0.336914C14.4537 0.399219 13.0617 1.06678 12.2684 1.8901C11.3953 2.77127 10.8814 3.86161 10.9912 5.08992C12.2934 5.17893 13.4808 4.58257 14.4587 3.56344Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_8_8">
<rect width="20" height="20" fill="white" transform="translate(0.971252 0.336914)"/>
</clipPath>
</defs>
</svg>

                    <div className='text-white '>
                      <div className='text-[12px]'>Apple Store</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <svg width="202" height="15" viewBox="0 0 202 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.616 11H9.296L5.81 1.256H3.962L0.476 11H2.142L2.842 9.012H6.916L7.616 11ZM6.468 7.71H3.29L4.886 3.188L6.468 7.71ZM10.8117 11H12.4077V0.64H10.8117V11ZM14.5031 11H16.0991V0.64H14.5031V11ZM23.4273 6.94C23.4273 5.302 24.1553 4.812 25.3313 4.812H25.7373V3.16C24.6453 3.16 23.8753 3.636 23.4273 4.406V3.286H21.8313V11H23.4273V6.94ZM27.2043 11H28.8003V3.286H27.2043V11ZM28.0163 2.264C28.5763 2.264 29.0243 1.816 29.0243 1.242C29.0243 0.668 28.5763 0.219999 28.0163 0.219999C27.4423 0.219999 26.9943 0.668 26.9943 1.242C26.9943 1.816 27.4423 2.264 28.0163 2.264ZM30.3637 7.108C30.3637 9.488 31.9737 11.126 34.0037 11.126C35.2637 11.126 36.1877 10.496 36.6777 9.838V11.126C36.6777 12.666 35.7537 13.422 34.5217 13.422C33.4157 13.422 32.5617 12.876 32.3237 12.078H30.7417C30.9377 13.786 32.4637 14.808 34.5217 14.808C36.9297 14.808 38.2877 13.226 38.2877 11.126V3.286H36.6777V4.406C36.2017 3.748 35.2637 3.16 34.0037 3.16C31.9737 3.16 30.3637 4.728 30.3637 7.108ZM36.6777 7.136C36.6777 8.802 35.5437 9.74 34.3397 9.74C33.1497 9.74 32.0017 8.774 32.0017 7.108C32.0017 5.442 33.1497 4.546 34.3397 4.546C35.5437 4.546 36.6777 5.484 36.6777 7.136ZM40.384 11H41.98V6.688C41.98 5.274 42.75 4.546 43.926 4.546C45.088 4.546 45.858 5.274 45.858 6.688V11H47.44V6.45C47.44 4.294 46.096 3.16 44.374 3.16C43.38 3.16 42.512 3.538 41.98 4.182V0.64H40.384V11ZM49.7278 8.858C49.7278 10.426 50.5818 11 51.9538 11H53.2138V9.67H52.2338C51.5618 9.67 51.3378 9.432 51.3378 8.858V4.588H53.2138V3.286H51.3378V1.368H49.7278V3.286H48.8178V4.588H49.7278V8.858ZM60.4388 8.844C60.3548 6.058 56.0008 6.926 56.0008 5.372C56.0008 4.854 56.4488 4.504 57.3028 4.504C58.1708 4.504 58.6888 4.966 58.7448 5.638H60.3408C60.2568 4.098 59.1088 3.16 57.3588 3.16C55.5388 3.16 54.3908 4.154 54.3908 5.386C54.3908 8.214 58.8708 7.346 58.8708 8.858C58.8708 9.39 58.3808 9.782 57.4568 9.782C56.5748 9.782 55.9728 9.264 55.9168 8.634H54.2648C54.3348 10.034 55.6368 11.126 57.4848 11.126C59.3048 11.126 60.4388 10.146 60.4388 8.844ZM67.396 6.94C67.396 5.302 68.124 4.812 69.3 4.812H69.706V3.16C68.614 3.16 67.844 3.636 67.396 4.406V3.286H65.8V11H67.396V6.94ZM74.421 4.504C75.611 4.504 76.549 5.26 76.577 6.45H72.307C72.475 5.232 73.343 4.504 74.421 4.504ZM78.033 8.704H76.311C76.017 9.306 75.471 9.782 74.491 9.782C73.315 9.782 72.405 9.012 72.293 7.738H78.187C78.229 7.472 78.243 7.22 78.243 6.954C78.243 4.686 76.689 3.16 74.491 3.16C72.209 3.16 70.641 4.714 70.641 7.136C70.641 9.558 72.279 11.126 74.491 11.126C76.381 11.126 77.599 10.048 78.033 8.704ZM85.5677 8.844C85.4837 6.058 81.1297 6.926 81.1297 5.372C81.1297 4.854 81.5777 4.504 82.4317 4.504C83.2997 4.504 83.8177 4.966 83.8737 5.638H85.4697C85.3857 4.098 84.2377 3.16 82.4877 3.16C80.6677 3.16 79.5197 4.154 79.5197 5.386C79.5197 8.214 83.9997 7.346 83.9997 8.858C83.9997 9.39 83.5097 9.782 82.5857 9.782C81.7037 9.782 81.1017 9.264 81.0457 8.634H79.3937C79.4637 10.034 80.7657 11.126 82.6137 11.126C84.4337 11.126 85.5677 10.146 85.5677 8.844ZM90.5402 4.504C91.7302 4.504 92.6682 5.26 92.6962 6.45H88.4262C88.5942 5.232 89.4622 4.504 90.5402 4.504ZM94.1522 8.704H92.4302C92.1362 9.306 91.5902 9.782 90.6102 9.782C89.4342 9.782 88.5242 9.012 88.4122 7.738H94.3062C94.3482 7.472 94.3622 7.22 94.3622 6.954C94.3622 4.686 92.8082 3.16 90.6102 3.16C88.3282 3.16 86.7602 4.714 86.7602 7.136C86.7602 9.558 88.3982 11.126 90.6102 11.126C92.5002 11.126 93.7182 10.048 94.1522 8.704ZM97.5288 6.94C97.5288 5.302 98.2568 4.812 99.4328 4.812H99.8388V3.16C98.7468 3.16 97.9768 3.636 97.5288 4.406V3.286H95.9328V11H97.5288V6.94ZM100.396 3.286L103.322 11H105.226L108.166 3.286H106.472L104.288 9.572L102.104 3.286H100.396ZM112.62 4.504C113.81 4.504 114.748 5.26 114.776 6.45H110.506C110.674 5.232 111.542 4.504 112.62 4.504ZM116.232 8.704H114.51C114.216 9.306 113.67 9.782 112.69 9.782C111.514 9.782 110.604 9.012 110.492 7.738H116.386C116.428 7.472 116.442 7.22 116.442 6.954C116.442 4.686 114.888 3.16 112.69 3.16C110.408 3.16 108.84 4.714 108.84 7.136C108.84 9.558 110.478 11.126 112.69 11.126C114.58 11.126 115.798 10.048 116.232 8.704ZM117.481 7.108C117.481 9.488 119.091 11.126 121.121 11.126C122.381 11.126 123.305 10.538 123.795 9.838V11H125.405V0.64H123.795V4.364C123.207 3.636 122.143 3.16 121.135 3.16C119.091 3.16 117.481 4.728 117.481 7.108ZM123.795 7.136C123.795 8.802 122.661 9.74 121.457 9.74C120.267 9.74 119.119 8.774 119.119 7.108C119.119 5.442 120.267 4.546 121.457 4.546C122.661 4.546 123.795 5.484 123.795 7.136ZM136.629 11.098C138.673 11.098 139.821 8.816 139.821 6.646C139.821 3.86 137.931 1.956 134.683 1.956C130.441 1.956 127.431 5.134 127.431 9.18C127.431 12.022 129.433 13.842 132.513 13.842C133.521 13.842 134.487 13.674 135.369 13.296L135.159 12.232C134.445 12.582 133.591 12.722 132.835 12.722C130.231 12.722 128.733 11.462 128.733 9.054C128.733 5.652 131.141 3.062 134.487 3.062C137.119 3.062 138.533 4.35 138.533 6.716C138.533 8.06 138.015 10.034 136.867 10.034C136.167 10.034 136.125 9.544 136.237 8.788L136.937 4.784H135.551L135.425 5.484C135.103 4.938 134.543 4.658 133.717 4.658C131.659 4.658 130.245 6.562 130.245 8.676C130.245 10.146 131.085 11.098 132.541 11.098C133.507 11.098 134.431 10.622 135.005 9.894C135.131 10.636 135.663 11.098 136.629 11.098ZM135.145 7.402C135.145 8.69 134.235 9.866 133.031 9.866C132.121 9.866 131.729 9.264 131.729 8.438C131.729 7.178 132.471 5.876 133.731 5.876C134.669 5.876 135.145 6.548 135.145 7.402ZM142.669 2.264C143.229 2.264 143.677 1.816 143.677 1.242C143.677 0.668 143.229 0.219999 142.669 0.219999C142.095 0.219999 141.647 0.668 141.647 1.242C141.647 1.816 142.095 2.264 142.669 2.264ZM141.857 3.286V12.512C141.857 13.086 141.633 13.324 140.961 13.324H140.415V14.668H141.241C142.613 14.668 143.453 14.08 143.453 12.512V3.286H141.857ZM145.016 7.108C145.016 9.488 146.626 11.126 148.628 11.126C149.916 11.126 150.84 10.51 151.33 9.852V11H152.94V3.286H151.33V4.406C150.854 3.776 149.958 3.16 148.656 3.16C146.626 3.16 145.016 4.728 145.016 7.108ZM151.33 7.136C151.33 8.802 150.196 9.74 148.992 9.74C147.802 9.74 146.654 8.774 146.654 7.108C146.654 5.442 147.802 4.546 148.992 4.546C150.196 4.546 151.33 5.484 151.33 7.136ZM154.504 7.108C154.504 9.488 156.114 11.126 158.144 11.126C159.404 11.126 160.328 10.538 160.818 9.838V11H162.428V0.64H160.818V4.364C160.23 3.636 159.166 3.16 158.158 3.16C156.114 3.16 154.504 4.728 154.504 7.108ZM160.818 7.136C160.818 8.802 159.684 9.74 158.48 9.74C157.29 9.74 156.142 8.774 156.142 7.108C156.142 5.442 157.29 4.546 158.48 4.546C159.684 4.546 160.818 5.484 160.818 7.136ZM171.875 7.136C171.875 4.714 170.139 3.16 167.941 3.16C165.743 3.16 164.007 4.714 164.007 7.136C164.007 9.558 165.673 11.126 167.871 11.126C170.083 11.126 171.875 9.558 171.875 7.136ZM165.631 7.136C165.631 5.386 166.709 4.546 167.913 4.546C169.103 4.546 170.237 5.386 170.237 7.136C170.237 8.886 169.061 9.74 167.871 9.74C166.667 9.74 165.631 8.886 165.631 7.136ZM180.802 7.136C180.802 4.714 179.066 3.16 176.868 3.16C174.67 3.16 172.934 4.714 172.934 7.136C172.934 9.558 174.6 11.126 176.798 11.126C179.01 11.126 180.802 9.558 180.802 7.136ZM174.558 7.136C174.558 5.386 175.636 4.546 176.84 4.546C178.03 4.546 179.164 5.386 179.164 7.136C179.164 8.886 177.988 9.74 176.798 9.74C175.594 9.74 174.558 8.886 174.558 7.136ZM184.032 10.076C184.032 9.502 183.584 9.054 183.024 9.054C182.45 9.054 182.002 9.502 182.002 10.076C182.002 10.65 182.45 11.098 183.024 11.098C183.584 11.098 184.032 10.65 184.032 10.076ZM185.225 7.136C185.225 9.558 186.793 11.126 189.005 11.126C190.895 11.126 192.127 10.076 192.561 8.564H190.839C190.545 9.362 189.957 9.782 189.005 9.782C187.717 9.782 186.863 8.83 186.863 7.136C186.863 5.456 187.717 4.504 189.005 4.504C189.957 4.504 190.573 4.98 190.839 5.722H192.561C192.127 4.098 190.895 3.16 189.005 3.16C186.793 3.16 185.225 4.728 185.225 7.136ZM201.502 7.136C201.502 4.714 199.766 3.16 197.568 3.16C195.37 3.16 193.634 4.714 193.634 7.136C193.634 9.558 195.3 11.126 197.498 11.126C199.71 11.126 201.502 9.558 201.502 7.136ZM195.258 7.136C195.258 5.386 196.336 4.546 197.54 4.546C198.73 4.546 199.864 5.386 199.864 7.136C199.864 8.886 198.688 9.74 197.498 9.74C196.294 9.74 195.258 8.886 195.258 7.136Z" fill="#5E6282"/>
</svg>

          </Container>
        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Footer;
