import React from "react";
import Events from "../Home/Events";

const Event = () => {
  return (
    <React.Fragment>
      <div className=" bg-[#1C1E24] w-full py-3 md:py-6 text-center text-white">
        <h3 className="md:text-5xl text-2xl text-[#FF6300] font-bold md:w-[25%] w-full mx-auto pt-3">
          Techbridge Events
        </h3>
        <p className="text-base font-medium md:w-[55%] w-full mx-auto newsreader pt-4">
          Uncover a World of Tech, Design, and Marketing Meetup Events in
          Bangkok. Come and Join Us for an Amazing Experience!
        </p>
      </div>
      <div className="md:w-[85%] w-full mx-auto">
        <Events />
      </div>
    </React.Fragment>
  );
};

export default Event;
