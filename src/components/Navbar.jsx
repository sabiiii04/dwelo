import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { CiSearch, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"; // Close icon

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center bg-[#FFF7F2] p-6 md:p-12 relative">
            <Link to="/">
                <img src={logo} alt="logo" className="h-[30px]" />
            </Link>


            <nav className="hidden md:block">
                <ul className="flex gap-5 lg:gap-10 text-[#281B12] font-bold text-[18px]">
                    <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
                    <li><Link to="/service" className="hover:text-orange-600">Service</Link></li>
                    <li><Link to="/agents" className="hover:text-orange-600">Agents</Link></li>
                    <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
                </ul>
            </nav>


            <div className="hidden sm:flex gap-6 text-[#2B1B12] text-[26px] justify-center items-center">
                <CiSearch />
                <CiUser />
                <button className="px-6 py-3 text-white bg-[#2B1B12] font-semibold text-[16px] rounded-[8px] hover:cursor-pointer hover:bg-orange-950">
                    Sign Up
                </button>
            </div>


            <RxHamburgerMenu onClick={() => setIsMenuOpen(true)} className="block md:hidden w-[40px] h-auto cursor-pointer" />


            {isMenuOpen && (
                <div className="fixed bg-[#FFF7F2] w-full h-full left-0 top-0 z-[10] p-6 flex flex-col">
                    <div className="flex justify-between items-center">
                        <Link to="/">
                            <img src={logo} alt="logo" className="h-[50px]" />
                        </Link>
                        <AiOutlineClose
                            onClick={() => setIsMenuOpen(false)}
                            className="w-[40px] h-auto cursor-pointer"
                        />
                    </div>

                    <nav className="mt-10">
                        <ul className="flex flex-col justify-center items-center gap-5 lg:gap-10 text-[#281812] font-bold text-[28px]">
                            <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
                            <li><Link to="/service" className="hover:text-orange-600">Service</Link></li>
                            <li><Link to="/agents" className="hover:text-orange-600">Agents</Link></li>
                            <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
