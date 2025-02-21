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
        <section className="flex flex-col items-center justify-center p-10">
            <h2 className="text-[40px] text-[#281812] font-extrabold mb-6">Our Popular Residences</h2>
            <ul className="flex justify-evenly w-full">
                {residences.map((residence, index) => (
                    <li key={index} className="drop-shadow-xl">
                        <img src={residence.img} alt={residence.location} className="h-[306px] w-[300px] object-cover rounded-t-[15px]" />
                        <div className="bg-[#DDC7BB] p-5 rounded-b-[15px] flex flex-col gap-4">
                            <h3 className="flex items-center gap-1"><IoLocationSharp />{residence.location}</h3>
                            <p className="flex gap-10">
                                <span className="flex items-center gap-1"><MdBedroomChild />{residence.rooms} Rooms</span>
                                <span className="flex items-center gap-1"><BiSolidArea />{residence.area} sq ft</span>
                            </p>
                            <div className="flex justify-between">
                                <button className="px-5 py-2 text-white bg-[#2B1812] text-[14px] rounded-[8px] hover:cursor-pointer hover:bg-orange-950">
                                    Sign Up
                                </button>
                                <p>${residence.price}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ResidencesSection;