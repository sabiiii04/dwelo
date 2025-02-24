import aboutHouse from '../assets/aboutHouse.png';

const AboutUSSection = () => {
    return (
        <section className="flex flex-col-reverse lg:flex-row items-center p-8 lg:p-12 xl:p-20 lg:gap-10 gap-14">
            <img src={aboutHouse} alt="about us house cottage" className="w-full lg:w-1/2 rounded-[15px]" />
            <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#281812]">We Help You To Find Your Dream Home</h2>
                <p className="mt-4  max-w-lg">
                    From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality.
                </p>
                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-8">
                    <div className="text-center">
                        <p className="text-[35px] font-bold">8K+</p>
                        <p >Houses Available</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[35px] font-bold">6K+</p>
                        <p >Houses Sold</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[35px] font-bold">2K+</p>
                        <p >Trusted Agents</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUSSection;
