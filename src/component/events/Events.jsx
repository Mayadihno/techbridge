import React from "react";
import Events from "../Home/Events";

const Event = () => {
  return (
    <React.Fragment>
      <div className=" bg-[#1C1E24] w-full py-6 text-center text-white">
        <h3 className=" text-5xl text-[#FF6300] font-bold w-[25%] mx-auto pt-3">
          Techbridge Events
        </h3>
        <p className="text-base font-medium w-[55%] mx-auto newsreader pt-4">
          Uncover a World of Tech, Design, and Marketing Meetup Events in
          Bangkok. Come and Join Us for an Amazing Experience!
        </p>
      </div>
      <div className="w-[85%] mx-auto">
        <Events />
      </div>
    </React.Fragment>
  );
};

export default Event;
