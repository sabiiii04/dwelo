import React from 'react';
import { FaStar } from "react-icons/fa";
import user1 from "../assets/user1.png";
import home1 from "../assets/home1.png";

const review = [
    {name: "Sarah Nguyen", location: "San Francisco", rating: 5.0,
        review: "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
        img: user1,
        homeImg: home1,},
    {name: "Michael Rodriguez", location: "San Diego", rating: 4.5,
        review: "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
        img: user1,
        homeImg: home1,},
    {name: "Emily Johnson", location: "Los Angeles", rating: 5.0,
        review: "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
        img: user1,
        homeImg: home1,},
];

const TestimonialsSection = () => {
    return (
        <section className="flex flex-col items-center justify-center lg:p-10 p-8 bg-[#FEF7F2]">
            <h2 className="text-[40px]  font-extrabold mb-6 text-center lg:text-start">What People Say About Dwello</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-center justify-center">
            {review.map((review, index) => (
                    <li key={index} className="bg-[#DDC7BB]  rounded-lg shadow-lg lg:w-[350px] w-full">
                        <img src={review.homeImg} alt="Home" className="w-full h-[180px] rounded-t-lg object-cover mb-4" />
                        <div className="flex items-center p-5 gap-3">
                            <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full" />
                            <div>
                                <h3 className="font-bold text-lg">{review.name}</h3>
                                <p className="text-sm text-600">{review.location}</p>
                            </div>
                            <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md ml-auto">
                                <FaStar className="text-yellow-500" /> {review.rating}
                            </span>
                        </div>
                        <p className="px-5 pb-5 text-sm mt-3 text-700">{review.review}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TestimonialsSection;
