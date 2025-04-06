import React from "react";
import { portfolio } from "../../static/bannerData";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const data = portfolio.slice(0, 6);

  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="md:w-[88%] w-[95%] mx-auto newsreader mb-10">
        <h2 className="md:text-3xl text-xl mb-3 font-bold text-[#000]">
          Techbridges’ solutions across industries{" "}
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-7">
          {data.map((item) => {
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
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/projects")}
            className="px-8 py-3 bg-[#FF6300] cursor-pointer text-white font-semibold rounded-md hover:bg-[#dc143cb7] transition duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
