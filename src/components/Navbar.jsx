import React from 'react';
import logo from '../assets/logo.png';
import {Link} from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
const Navbar = () => {
    return (
        <header className="flex justify-between items-center bg-[#FFFF7F2] p-12">
            <Link to={"/"}>
                <img src={logo} alt="logo" className="h-[30px]" />
            </Link>

            <nav>
                <ul className="flex gap-10 text-[#281B12] font-bold text-[18px]">
                    <li><Link to={"/"} className="hover:text-orange-600">Home</Link></li>
                    <li><Link to={"/"} className="hover:text-orange-600">Service</Link></li>
                    <li><Link to={"/"} className="hover:text-orange-600">Agents</Link></li>
                    <li><Link to={"/"} className="hover:text-orange-600">Contact</Link></li>
                </ul>
            </nav>

            <div className="flex gap-6 text-[#2B1B12] text-[26px] justify-center items-center">
                <CiSearch />
                <CiUser />
                <button className="px-6 py-3 text-white bg-[#2B1B12] font-semibold text-[16px] rounded-[8px] hover:cursor-pointer hover:bg-orange-950 ">
                    Sign Up
                </button>
            </div>
        </header>
    );
};

export default Navbar;