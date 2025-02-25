import React from 'react';
import heroHouse from '../assets/hero-house.png';

const HeroSection = () => {
    return (
        <section className=" flex flex-col lg:flex-row bg-[#FEF7F2] overflow-hidden items-center relative">
            <div className="w-full lg:w-[50%] md:p-10 p-6 text-center lg:text-start gap-5 flex flex-col justify-center items-center lg:items-start">
                <h1 className="lg:text-[74px] text-[44px] font-extrabold">Find Your Dream House</h1>
                <p className="font-bold text-[18px] text-">
                    Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision
                </p>
                <button className="px-8 py-3 mt-12 text-white bg-[#281812] font-semibold text-[16px] rounded-[8px] hover:cursor-pointer hover:bg-orange-950">
                    Sign up
                </button>
            </div>
            <img src={heroHouse} alt="big white cottage" className="w-[50%]" />

            <div className="lg:absolute  lg:flex-row flex-col gap-4 py-10 px-4 bg-[#DDC7BB] rounded-[15px] bottom-5 right-30 ">
                <div className="bg-[#EFF5F1] p-2 rounded-[15px] w-[250px] lg:w-[200px] xl:w-[250px]">
                    Location
                </div>
                <div className="bg-[#EFF5F1] p-2 rounded-[15px] w-[250px] lg:w-[200px] xl:w-[250px]">
                    Type
                </div>
                <div className="bg-[#EFF5F1] p-2 rounded-[15px] w-[250px] lg:w-[200px] xl:w-[250px]">
                    Price Range
                </div>
                <button className="px-6 py-3 text-white bg-[#281812] font-semibold text-[16px] rounded-[8px] hover:cursor-pointer hover:bg-orange-950">
                    Sign up
                </button>
            </div>
        </section>
    );
};


export default HeroSection;