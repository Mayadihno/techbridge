import React from "react";
import { portfolio } from "../../static/bannerData";

const Project = () => {
  return (
    <React.Fragment>
      <div className=" bg-[#1C1E24] w-full py-6 text-center text-white">
        <h3 className=" text-5xl text-[#FF6300] font-bold w-[25%] mx-auto pt-3">
          Our Projects
        </h3>
        <p className="text-base font-medium w-[55%] mx-auto newsreader pt-4">
          Our projects are a reflection of our dedication to delivering
          excellence. From innovative solutions to impactful initiatives, we
          take pride in every endeavor we undertake. Explore our portfolio to
          witness the transformative power of our work.
        </p>
      </div>
      <div className="w-[85%] mx-auto newsreader my-10">
        <div className="grid grid-cols-3 gap-x-6 gap-y-7">
          {portfolio.map((item) => {
            return (
              <div
                key={item.id}
                className="border relative border-gray-300 rounded-lg cursor-pointer h-[520px] group overflow-hidden"
              >
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
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
