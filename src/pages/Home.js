import React from "react";

import NavBar from "../components/fragments/NavBar";
import Footer from "../components/fragments/Footer";
import HeroBanner from "../components/fragments/HeroBanner";
import ContactUsSection from "../components/fragments/ContactUsSection";
import ServicesSection from "../components/fragments/ServicesSection";
import WhyUsSection from "../components/fragments/WhyUsSection";
import OurWorkSection from "../components/fragments/OurWorkSection";
import CTABox from "../components/fragments/CTABox";

function Home(props) {
  return (
    <>
      <NavBar />
      <HeroBanner />

      <ContactUsSection />

      <ServicesSection />

      <WhyUsSection />

      <OurWorkSection />

      <CTABox />

      <Footer />
    </>
  );
}

export default Home;
