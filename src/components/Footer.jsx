import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { RiFacebookBoxLine } from "react-icons/ri";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#D5B9A3] text-[#3D261E] p-10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="font-bold text-xl">Dwello</h2>
                        <p className="mt-2">Bringing you closer to your dream home, one click at a time.</p>
                    </div>
                    <div>
                        <h3 className="font-bold">About</h3>
                        <ul className="mt-2 space-y-1">
                            <li>Our Story</li>
                            <li>Careers</li>
                            <li>Our Team</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Support</h3>
                        <ul className="mt-2 space-y-1">
                            <li>FAQ</li>
                            <li>Contact Us</li>
                            <li>Help Center</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold">Our Social</h3>
                        <ul className="mt-2 space-y-1">
                            <li className="flex items-center gap-2"><FaInstagram />Instagram</li>
                            <li className="flex items-center gap-2"><RiFacebookBoxLine />Facebook</li>
                            <li className="flex items-center gap-2"><RiTwitterXLine />Twitter</li>
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;