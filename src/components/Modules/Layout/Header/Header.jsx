

import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Logo from "../../../Elements/Logo/Logo";
import NavItems from "./NavItems";
import Snackbar from "./Snackbar";
import Container1 from "../../Container/Container copy";

const Header = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");
  const [isRotated, setIsRotated] = useState(false);
  const languages = ["En", "Sp"];

  const links = [
    {
      href: "#destinations",
      title: "Desitnations",
    },
    {
      href: "#services",
      title: "Hotels",
    },
    {
      href: "#flights",
      title: "Flights",
    },
    {
      href: "#bookings",
      title: "Bookings",
    },
    {
      href: "#",
      title: "Login",
    },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsRotated(!isRotated);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const languageListVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Container1>
      <header className="sticky top-0 flex  justify-between 2xl:justify-around xl:pl-24 xl:pr-10 items-center pt-10">
        <Logo />
        <div className="hidden lg:flex justify-between items-center">
          {links.map(({ href, title }) => (
            <NavItems href={href} title={title} key={title} />
          ))}
          <button className="text-secondaryLight font-semibold border-2 border-secondaryLight mx-6 px-9 py-2 rounded-md font-google-sans hover:text-lg duration-700 ">
            Sign Up
          </button>
          <div className="language-dropdown duration-700 ease-in-out font-google-sans text-secondaryLight font-semibold flex items-center px-6">
            {selectedLanguage}
            <button
              className="text-secondaryLight font-semibold border-transparent px-3 py-2 rounded-md"
              onClick={toggleLanguageDropdown}
            >
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 0.5L5 5L9.5 0.5" stroke="#212832" />
              </svg>
            </button>

            {isLanguageDropdownOpen && (
              <div
                className="dropdown-content absolute flex flex-col z-50 transition ease-in-out mt-24 origin-top duration-700 scale-100"
               
              >
                {languages.map((language) => (
                  <motion.a
                    href="#"
                    key={language}
                    onClick={() => handleLanguageChange(language)}
                    className="font-google-sans text-secondaryLight font-semibold"
                    variants={languageListVariants}
                  >
                    {language}
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </div>
        <Snackbar />
      </header>
    </Container1>
  );
};

export default Header;

