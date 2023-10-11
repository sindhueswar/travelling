import React, { useEffect } from "react";
import Container from "./components/Modules/Container/Container";
import Companies from "./components/Templates/Companies/Companies";
import Contact from "./components/Templates/Contact/Contact";
import Destinations from "./components/Templates/Destinations/Destinations";
import HeroSection from "./components/Templates/Home/HomeHero/HeroSection";
import Services from "./components/Templates/Services/Services";
import Steps from "./components/Templates/Steps/Steps";
import Testimonial from "./components/Templates/testimonial/Testimonial";
import PricingSection from "./components/Templates/pricing/PricingCard";
function App() {
  const { hash } = window.location;
  useEffect(() => {
    if (hash) {
      const ele = document.getElementById(hash.split("#")[1]);
      ele.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);
  return (
    <Container>
      <HeroSection />
      <Services />
      <Destinations />
      <Testimonial/>      
      <Steps />      
      <PricingSection/>
      <Companies />
      <Contact />
    </Container>
  );
}

export default App;
