import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { testimonial } from "../../static/bannerData";

const Testimonial = () => {
  return (
    <React.Fragment>
      <div className="md:w-[88%] w-[95%] mx-auto md:my-16 my-6">
        <h3 className="md:text-5xl text-xl mb-8 text-center font-bold ">
          Testimonials from our clients
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
              1024: { slidesPerView: 2, spaceBetween: 15 },
              1280: { slidesPerView: 2, spaceBetween: 20 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {testimonial.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="flex flex-col md:flex-row justify-between border border-gray-300 rounded-2xl cursor-pointer">
                    <div className="md:w-1/2 w-full h-[350px] ">
                      <img
                        src={item.image}
                        className=" w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl"
                      />
                    </div>
                    <div className="md:w-1/2 w-full md:h-[350px] h-[210px] md:ml-5 pt-5 px-2 relative">
                      <h4 className="md:text-lg text-sm">{item.text}</h4>
                      <div className=" absolute md:bottom-0 md:left-0 left-2 pt-4 pb-2">
                        <p className="text-sm font-semibold text-[#FF6300] mt-2">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">{item.position}</p>
                      </div>
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

export default Testimonial;
