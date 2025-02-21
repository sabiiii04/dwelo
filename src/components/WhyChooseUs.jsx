import React from 'react';
import { FaMapMarkerAlt, FaUserEdit, FaClipboardList, FaHandshake } from "react-icons/fa";

const benefits = [
    {icon: <FaMapMarkerAlt size={30} />,
        title: "Expert Guidance",
        description: "Benefit from our team's seasoned expertise for a smooth buying experience."
    },
    {icon: <FaUserEdit size={30} />,
        title: "Personalized Service",
        description: "Our services adapt to your unique needs, making your journey stress-free."
    },
    {icon: <FaClipboardList size={30} />,
        title: "Transparent Process",
        description: "Stay informed with our clear and honest approach to buying your home."
    },
    {icon: <FaHandshake size={30} />,
        title: "Exceptional Support",
        description: "Providing peace of mind with our responsive and attentive customer service."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="flex flex-col items-center justify-center p-10 ">
            <h2 className="text-[40px]  font-extrabold">Why Choose Us</h2>
            <p className="text-center  text-lg mt-2 mb-8 font-medium">
                Elevating Your Home Buying Experience with Expertise, Integrity, <br />
                and Unmatched Personalized Service
            </p>
            <div className="flex justify-center gap-6 w-full max-w-6xl flex-wrap">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bg-[#DDC7BB] p-6 rounded-lg shadow-lg w-[250px] text-center">
                        <div className="bg-white p-4 rounded-lg inline-block  mb-4">{benefit.icon}</div>
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-sm">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
