import React from 'react';
import aboutHouse from '../assets/aboutHouse.png';

const AboutUSSection = () => {
    return (
        <section className="flex p-20 gap-14">
            <img src={aboutHouse} alt="about us house cottage" className="w-[50%] rounded-[15px]" />
            <div>
                <h2 className="text-[40px] font-extrabold text-[#281812]">We Help You To Find Your Dream Home</h2>
                <p> </p>
                <ul>
                    <li>
                        <p>
                            <span></span>
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