import React from 'react';
import aboutHouse from '../assets/aboutHouse.png';

const AboutUSSection = () => {
    return (
        <section className=" flex flex-col-reverse lg:flex:row p-8 lg:p-12 xl:p-20 lg:gap-10 gap-14">
            <img src={aboutHouse} alt="about us house cottage" className="w-full lg:w-[50%] rounded-[15px]" />
            <div>
                <h2 className="text-[40px] lg:text-start text-center font-extrabold text-[#281812]">We Help You To Find Your Dream Home</h2>
                <p> </p>
                <ul>
                    <li>
                        <p>
                            <span>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</span>
                            <span></span>
                        </p>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
    );
};

export default AboutUSSection;