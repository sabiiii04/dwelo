import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="flex flex-col items-center justify-center bg-[#FEF7F2] p-10">
            <h1 className="text-[48px] text-[#281812] font-extrabold mb-6">Why Choose Us</h1>
            <p className="text-[24px] text-[#4F5527] text-center mb-10">
                Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
            </p>
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center p-6 bg-white rounded-[15px] shadow-lg">
                    <h2 className="text-[28px] text-[#281812] font-bold mb-4">Expert Guidance</h2>
                    <p className="text-[18px] text-[#4F5527] text-center">
                        Benefit from our team's seasoned expertise for a smooth buying experience
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-[15px] shadow-lg">
                    <h2 className="text-[28px] text-[#281812] font-bold mb-4">Personalized Service</h2>
                    <p className="text-[18px] text-[#4F5527] text-center">
                        Our services adapt to your unique needs, making your journey stress-free
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-[15px] shadow-lg">
                    <h2 className="text-[28px] text-[#281812] font-bold mb-4">Transparent Process</h2>
                    <p className="text-[18px] text-[#4F5527] text-center">
                        Stay informed with our clear and honest approach to buying your home
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-[15px] shadow-lg">
                    <h2 className="text-[28px] text-[#281812] font-bold mb-4">Exceptional Support</h2>
                    <p className="text-[18px] text-[#4F5527] text-center">
                        Providing peace of mind with our responsive and attentive customer service
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;