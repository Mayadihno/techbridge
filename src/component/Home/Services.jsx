import React, { useState } from "react";
import { services } from "../../static/bannerData";

const Services = () => {
  const [active, setActive] = useState(1);
  return (
    <React.Fragment>
      <div className="bg-[#F5F5F5] py-16 px-8 rounded-lg shadow-lg">
        <div className="mx-auto w-[88%]">
          <h2 className="text-5xl font-semibold text-center newsreader leading-[50px] mb-12">
            <span className="text-[#FF6300]">Services</span> offered by
            Techbridge
          </h2>
          <div className="flex justify-between">
            <div className="flex flex-col bg-white w-[30%] newsreader">
              {services.map((item) => (
                <div
                  key={item.id}
                  className={`p-[41px] flex items-center cursor-pointer transition-transform duration-300 hover:scale-105 ${
                    active === item.id
                      ? "border-b-2 border-[#FF6300] shadow-lg bg-gray-100 "
                      : "border-b-4 border-transparent"
                  }`}
                  onClick={() => setActive(item.id)}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className={`w-10 h-10 transition-transform duration-300 ${
                      active === item.id ? "scale-110" : ""
                    }`}
                  />
                  <h3
                    className={`text-lg pl-6 font-medium text-nowrap ${
                      active === item.id ? "text-[#FF6300]" : "text-gray-600"
                    }`}
                  >
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
            <div className="w-[70%] ml-10">
              {active === 1 && (
                <div>
                  <h2 className="text-3xl cursor-pointer ease-in transition duration-200 font-semibold hover:text-[#FF6300] text-[#000] leading-[50px] newsreader">
                    Custom software development
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-10">
                    Build tailored software solutions that scale and evolve
                    along with your business goals. Establish long-term
                    partnerships with our team of committed software developers
                    through technical excellence and a transparent development
                    process.
                  </p>
                  <button className="uppercase bg-[#FF6300] mt-5 text-white cursor-pointer  hover:bg-[#ff6200ab] font-bold py-3 px-5 rounded-[30px] focus:outline-none focus:shadow-outline">
                    Learn More
                  </button>

                  <div className="w-full h-[400px] mt-6">
                    <img
                      src="https://yalantis.com/wp-content/uploads/2025/03/Custom-software-development.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              {active === 2 && (
                <div>
                  <h2 className="text-3xl cursor-pointer ease-in transition duration-200 font-semibold hover:text-[#FF6300] text-[#000] leading-[50px] newsreader">
                    Dedicated development teams
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-10">
                    Boost capacity of your in-house team with our dedicated
                    developers and tech specialists, while PMP-certified
                    managers ensure transparent communication and a commitment
                    to long-term success.
                  </p>
                  <button className="uppercase bg-[#FF6300] mt-5 text-white cursor-pointer  hover:bg-[#ff6200ab] font-bold py-3 px-5 rounded-[30px] focus:outline-none focus:shadow-outline">
                    Learn More
                  </button>

                  <div className="w-full h-[400px] mt-6">
                    <img
                      src="https://yalantis.com/wp-content/uploads/2025/03/Development-Team-Augmentation.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              {active === 3 && (
                <div>
                  <h2 className="text-3xl cursor-pointer ease-in transition duration-200 font-semibold hover:text-[#FF6300] text-[#000] leading-[50px] newsreader">
                    IT consulting
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-10">
                    Get a clear roadmap for your digital transformation with our
                    seasoned consultants and business analysts. Optimize your
                    current processes and implement new solutions for business
                    growth.
                  </p>
                  <button className="uppercase bg-[#FF6300] mt-5 text-white cursor-pointer  hover:bg-[#ff6200ab] font-bold py-3 px-5 rounded-[30px] focus:outline-none focus:shadow-outline">
                    Learn More
                  </button>

                  <div className="w-full h-[400px] mt-6">
                    <img
                      src="https://yalantis.com/wp-content/uploads/2025/03/IT-consulting-services.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              {active === 4 && (
                <div>
                  <h2 className="text-3xl cursor-pointer ease-in transition duration-200 font-semibold hover:text-[#FF6300] text-[#000] leading-[50px] newsreader">
                    Digital transformation
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-10">
                    Gain the competitive edge over business rivals and transform
                    your business with the assistance of our AI, IoT, and
                    automation experts.
                  </p>
                  <button className="uppercase bg-[#FF6300] mt-5 text-white cursor-pointer  hover:bg-[#ff6200ab] font-bold py-3 px-5 rounded-[30px] focus:outline-none focus:shadow-outline">
                    Learn More
                  </button>

                  <div className="w-full h-[400px] mt-6">
                    <img
                      src="https://yalantis.com/wp-content/uploads/2025/03/Digital-Transformation.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              {active === 5 && (
                <div>
                  <h2 className="text-3xl cursor-pointer ease-in transition duration-200 font-semibold hover:text-[#FF6300] text-[#000] leading-[50px] newsreader">
                    Staff augmentation
                  </h2>
                  <p className="mt-4 text-lg text-gray-700 leading-10">
                    Replenish your teams with pre-vetted, highly skilled
                    professionals who bring deep technical expertise and a
                    problem-solving mindset. Our transparent and efficient
                    process ensures the right talent for your needs.
                  </p>
                  <button className="uppercase bg-[#FF6300] mt-5 text-white cursor-pointer  hover:bg-[#ff6200ab] font-bold py-3 px-5 rounded-[30px] focus:outline-none focus:shadow-outline">
                    Learn More
                  </button>

                  <div className="w-full h-[400px] mt-6">
                    <img
                      src="https://yalantis.com/wp-content/uploads/2025/03/Staff-Augmentation.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
