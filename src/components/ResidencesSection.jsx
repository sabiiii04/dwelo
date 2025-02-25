import React from 'react';
import residence1 from "../assets/residence1.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdBedroomChild } from "react-icons/md";
import { BiSolidArea } from "react-icons/bi";

const ResidencesSection = () => {
    const residences = [
        { location: "San Francisco, California", img: residence1, rooms: 4, area: 3500, price: "2,500,000" },
        { location: "Beverly Hills, California", img: residence1, rooms: 3, area: 1500, price: "850,000" },
        { location: "Palo Alto, California", img: residence1, rooms: 6, area: 4000, price: "3,700,000" },
    ];

    return (
        <section className="flex flex-col items-center justify-center lg:p-20 p-6">
            <h2 className="text-[40px] font-extrabold mb-6 text-center lg:text-start">Our Popular Residences</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {residences.map((residence, index) => (
                    <li key={index} className="drop-shadow-xl flex flex-col items-center  rounded-[15px] overflow-hidden shadow-lg w-full max-w-sm">
                        <img src={residence.img} alt={residence.location} className="h-[306px] w-full object-cover" />
                        <div className="bg-[#DDC7BB] p-5 flex flex-col gap-4 w-full">
                            <h3 className="flex items-center gap-1 text-lg font-semibold"><IoLocationSharp />{residence.location}</h3>
                            <p className="flex flex-col sm:flex-row justify-between ">
                                <span className="flex items-center gap-1"><MdBedroomChild /> {residence.rooms} Rooms</span>
                                <span className="flex items-center gap-1"><BiSolidArea /> {residence.area} sq ft</span>
                            </p>
                            <div className="flex justify-between items-center">
                                <button className="px-5 py-2 text-white bg-[#2B1812] text-[14px] rounded-[8px] hover:cursor-pointer hover:bg-orange-950">
                                    Sign Up
                                </button>
                                <p className="font-bold text-lg">${residence.price}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ResidencesSection;
