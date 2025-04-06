import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { bannerData } from "../../static/bannerData";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="relative z-0">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {bannerData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full md:h-[600px] h-[400px] flex items-center text-white"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent"></div>

              {/* Text Content */}
              <div className="relative z-10 md:ml-28 ml-4 space-y-4">
                <h4 className="md:text-6xl text-2xl font-bold pb-4 md:w-[70%] w-full text-[#FF6300]">
                  {item.title}
                </h4>
                <h3 className="md:text-2xl text-base font-[400] md:w-[70%] w-full leading-9 newsreader">
                  {item.description}
                </h3>
                <div className="mt-6">
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-5 uppercase py-3 bg-[#000] font-[500] cursor-pointer hover:bg-[#DC143C] rounded-sm text-white"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
