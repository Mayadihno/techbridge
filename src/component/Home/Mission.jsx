import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { componies } from "../../static/bannerData";

const Mission = () => {
  return (
    <React.Fragment>
      <div className="w-[88%] mx-auto my-16 newsreader">
        <div className=" flex justify-between items-center">
          <div className="w-1/2 h-fit">
            <img
              src="https://www.fingent.com/wp-content/uploads/Home-page-img-02.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-[#000] leading-[50px] newsreader">
              We Are TechBridge, We Build{" "}
              <span className="text-[#1E90FF] newsreader">
                Innovative Software Solutions
              </span>{" "}
              To Drive Business Success
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-10">
              TechBridge is your trusted partner in digital transformation. We
              specialize in developing mission-critical software solutions,
              enabling businesses to scale with cutting-edge technologies. From
              AI-powered automation to secure cloud infrastructures, we help
              companies stay ahead in the digital era. With our expertise in
              data management, IoT, and modern software engineering, we empower
              industries to optimize operations, enhance efficiency, and achieve
              long-term success.
            </p>
          </div>
        </div>
      </div>
      <div className="my-6">
        <h3 className="text-3xl font-bold text-center text-[#FF6300] leading-[50px] newsreader">
          TechBridge is trusted by over 400+ clients served worldwide
        </h3>
        <div className="">
          <Swiper
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 4, spaceBetween: 10 },
              640: { slidesPerView: 4, spaceBetween: 15 },
              768: { slidesPerView: 6, spaceBetween: 20 },
              1024: { slidesPerView: 6, spaceBetween: 5 },
              1280: { slidesPerView: 7, spaceBetween: 10 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {componies.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="w-full h-[100px]">
                      <img
                        src={item.image}
                        className=" w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Mission;
