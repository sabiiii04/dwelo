import React from 'react';
import HeroSection from "../components/HeroSection.jsx";
import AboutUSSection from "../components/AboutUsSection.jsx";
import ResidencesSection from "../components/ResidencesSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import WhatPeopleSay from "../components/WhatPeopleSay.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutUSSection/>
            <WhyChooseUs/>
            <ResidencesSection/>
            <WhatPeopleSay/>
            <ContactSection/>
            <Footer/>
        </>
    );
};

export default Home;