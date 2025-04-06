import React from "react";
import Services from "../Home/Services";

const Solutions = () => {
  return (
    <React.Fragment>
      <div className=" bg-[#1C1E24] w-full py-6 text-center text-white">
        <h3 className="md:text-5xl text-2xl text-[#FF6300] font-bold md:w-[25%] w-full mx-auto pt-3">
          Expertise and Competencies
        </h3>
        <p className="text-base font-medium md:w-[55%] w-[95%] mx-auto newsreader pt-4">
          Our team of experts is dedicated to delivering high-quality solutions,
          With our technical know-how and experience engineering sophisticated
          IT systems, we can help you achieve your business objectives in tune
          with your time, budget, and expectations.
        </p>
      </div>
      <div className="my-[-65px]">
        <Services />
      </div>
    </React.Fragment>
  );
};

export default Solutions;
