import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import { TbRosetteDiscountCheck } from "react-icons/tb";

const ContactSection = () => {
    return (
        <section className="flex flex-col items-center justify-center p-20">
            <h2 className="text-[32px]  font-extrabold text-center">
                Do You Have Any Questions? <br /> Get Help From Us
            </h2>
            <div className="flex gap-6 mt-4  text-lg font-medium p-10">
                <div className="flex items-center gap-2">
                    <TbRosetteDiscountCheck  size={22} /> Chat live with our support team
                </div>
                <div className="flex items-center gap-2">
                    <TbRosetteDiscountCheck size={22} /> Browse our FAQ
                </div>
            </div>
            <div className="flex mt-6 w-full max-w-md gap-10">
                <div className="flex items-center bg-[#EADDC9] w-[1350px] px-4 py-3 rounded-lg">
                    <FaEnvelope size={20}/>
                    <input type="text" placeholder="Enter your email address..." className="outline-0 flex items-center bg-[#EADDC9] w-[350px] h-[10px]  px-4 py-3 rounded-lg"/>
                </div>
                <button className="bg-[#2B1812] text-white px-6 py-3 rounded-lg font-medium">
                    Submit
                </button>
            </div>
        </section>
    );
};

export default ContactSection;