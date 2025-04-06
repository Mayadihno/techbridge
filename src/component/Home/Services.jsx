import React, { useState } from "react";
import { expertise, services } from "../../static/bannerData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Services = () => {
  const [active, setActive] = useState(1);
  const [accordionOpen, setAccordionOpen] = useState(null);

  const handleAccordionToggle = (id) => {
    setAccordionOpen(accordionOpen === id ? null : id);
    setActive(id);
  };
  return (
    <React.Fragment>
      <div className="bg-[#F5F5F5] my-16 md:p-8 p-4 rounded-lg">
        <div className="mx-auto md:w-[88%] w-full">
          <h2 className="md:text-5xl text-2xl font-semibold text-center newsreader md:leading-[50px] mb-6 md:mb-12">
            <span className="text-[#FF6300]">Services</span> offered by
            Techbridge
          </h2>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between">
            <div className="flex flex-col bg-white w-[30%] newsreader">
              {services.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`p-[41px] flex items-center cursor-pointer transition-transform duration-300 hover:scale-105 ${
                    active === item.id
                      ? "border-b-2 border-[#FF6300] shadow-lg bg-gray-100"
                      : "border-b-4 border-transparent"
                  }`}
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
              {/* Render full content here */}
              {renderContent(active)}
            </div>
          </div>

          {/* Mobile Accordion Layout */}
          <div className="md:hidden">
            {services.map((item) => (
              <div key={item.id} className="mb-4 rounded-md shadow-sm">
                <button
                  onClick={() => handleAccordionToggle(item.id)}
                  className="w-full flex items-center justify-between p-4 bg-gray-100"
                >
                  <div className="flex items-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-6 h-6 mr-3"
                    />
                    <span className="font-semibold text-gray-800">
                      {item.name}
                    </span>
                  </div>
                  <span>{accordionOpen === item.id ? "−" : "+"}</span>
                </button>
                {accordionOpen === item.id && (
                  <div className="p-4 bg-white">{renderContent(item.id)}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="my-10 mx-auto md:w-[88%] w-full">
          <h3 className="md:text-3xl text-xl mb-3 pt-10 font-bold text-[#000]">
            Techbridge scope of expertise
          </h3>
          <div className="">
            <Swiper
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 5 },
                1280: { slidesPerView: 3, spaceBetween: 30 },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {expertise.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="border relative border-gray-300 rounded-lg cursor-pointer h-[520px] group overflow-hidden">
                      {/* Initial Text Content */}
                      <div
                        className="p-4 relative z-10 transition-all duration-500 group-hover:absolute group-hover:w-full 
                        group-hover:h-full group-hover:flex group-hover:flex-col group-hover:items-center
                        group-hover:bg-black/50 group-hover:text-white group-hover:mx-auto group-hover:justify-center"
                      >
                        <h4 className="text-lg font-bold pb-4 group-hover:text-2xl group-hover:font-semibold">
                          {item.header}
                        </h4>
                        <p className="text-sm leading-7 group-hover:text-center group-hover:w-[70%] group-hover:mx-auto newsreader group-hover:text-base group-hover:font-normal">
                          {item.text}
                        </p>
                      </div>

                      {/* Image that expands on hover */}
                      <div
                        className="w-full h-[300px] absolute bottom-0 left-0 transition-all duration-500 
                        group-hover:h-full group-hover:top-0"
                      >
                        <img
                          src={item.image}
                          className="w-full h-full object-cover rounded-bl-lg rounded-br-lg transition-all duration-500"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;

const renderContent = (id) => {
  switch (id) {
    case 1:
      return (
        <div>
          <h2 className="text-2xl font-semibold text-[#000] mb-4">
            Custom software development
          </h2>
          <p className="text-gray-700 leading-7 mb-4">
            Build tailored software solutions that scale and evolve along with
            your business goals. Establish long-term partnerships with our team
            of committed software developers through technical excellence and a
            transparent development process.
          </p>
          <button className="uppercase bg-[#FF6300] mt-2 text-white font-bold py-2 px-4 rounded-full">
            Learn More
          </button>
          <img
            src="https://yalantis.com/wp-content/uploads/2025/03/Custom-software-development.png"
            alt=""
            className="w-full md:h-[456px] h-[250px] mt-4 md:object-cover object-contain"
          />
        </div>
      );
    case 2:
      return (
        <div>
          <h2 className="text-2xl font-semibold text-[#000] mb-4">
            Dedicated development teams
          </h2>
          <p className="text-gray-700 leading-7 mb-4">
            Boost capacity of your in-house team with our dedicated developers
            and tech specialists, while PMP-certified managers ensure
            transparent communication and a commitment to long-term success.
          </p>
          <button className="uppercase bg-[#FF6300] mt-2 text-white font-bold py-2 px-4 rounded-full">
            Learn More
          </button>
          <img
            src="https://yalantis.com/wp-content/uploads/2025/03/Development-Team-Augmentation.png"
            alt=""
            className="w-full md:h-[456px] h-[250px] mt-4 md:object-cover object-contain"
          />
        </div>
      );
    case 3:
      return (
        <div>
          <h2 className="text-2xl font-semibold text-[#000] mb-4">
            IT consulting
          </h2>
          <p className="text-gray-700 leading-7 mb-4">
            Get a clear roadmap for your digital transformation with our
            seasoned consultants and business analysts. Optimize your current
            processes and implement new solutions for business growth.
          </p>
          <button className="uppercase bg-[#FF6300] mt-2 text-white font-bold py-2 px-4 rounded-full">
            Learn More
          </button>
          <img
            src="https://yalantis.com/wp-content/uploads/2025/03/IT-consulting-services.png"
            alt=""
            className="w-full md:h-[456px] h-[250px] mt-4 md:object-cover object-contain"
          />
        </div>
      );
    case 4:
      return (
        <div>
          <h2 className="text-2xl font-semibold text-[#000] mb-4">
            Digital transformation
          </h2>
          <p className="text-gray-700 leading-7 mb-4">
            Gain the competitive edge over business rivals and transform your
            business with the assistance of our AI, IoT, and automation experts.
          </p>
          <button className="uppercase bg-[#FF6300] mt-2 text-white font-bold py-2 px-4 rounded-full">
            Learn More
          </button>
          <img
            src="https://yalantis.com/wp-content/uploads/2025/03/Digital-Transformation.png"
            alt=""
            className="w-full md:h-[456px] h-[250px] mt-4 md:object-cover object-contain"
          />
        </div>
      );
    case 5:
      return (
        <div>
          <h2 className="text-2xl font-semibold text-[#000] mb-4">
            Staff augmentation
          </h2>
          <p className="text-gray-700 leading-7 mb-4">
            Replenish your teams with pre-vetted, highly skilled professionals
            who bring deep technical expertise and a problem-solving mindset.
            Our transparent and efficient process ensures the right talent for
            your needs.
          </p>
          <button className="uppercase bg-[#FF6300] mt-2 text-white font-bold py-2 px-4 rounded-full">
            Learn More
          </button>
          <img
            src="https://yalantis.com/wp-content/uploads/2025/03/Staff-Augmentation.png"
            alt=""
            className="w-full md:h-[456px] h-[250px] mt-4 md:object-cover object-contain"
          />
        </div>
      );
    default:
      return null;
  }
};
