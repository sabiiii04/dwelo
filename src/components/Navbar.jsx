import React from 'react';
import logo from '../assets/logo.png';
import {Link} from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import {UseState} from 'react';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <header className="flex justify-between items-center bg-[#FFF7F2] p-6  md:p-12 relative ">
            <Link to={"/"}>
                <img src={logo} alt="logo" className="h-[30px]" />
            </Link>

            <nav className="hidden md2:block">
                <ul className="flex gap-5 lg:gap-10  text-[#281B12] font-bold text-[18px]">
                    <li><Link to={"/"} className="hover:text-orange-600">Home</Link></li>
                    <li><Link to={"/"} className="hover:text-orange-600">Service</Link></li>
                    <li><Link to={"/"} className="hover:text-orange-600">Agents</Link></li>
                    <li><Link to={"/"} className="hover:text-orange-600">Contact</Link></li>
                </ul>
            </nav>

            <div className="hidden sm:flex gap-6 text-[#2B1B12] text-[26px] justify-center items-center">
                <CiSearch />
                <CiUser />
                <button className="px-6 py-3 text-white bg-[#2B1B12] font-semibold text-[16px] rounded-[8px] hover:cursor-pointer hover:bg-orange-950 ">
                    Sign Up
                </button>
            </div>
            <RxHamburgerMenu onClick={()  =>{setIsMenuOpen(true)}} className="block md:hidden w-[40px] h-auto" />

        </header>
    );
};

export default Navbar;