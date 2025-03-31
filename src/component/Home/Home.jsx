import React from "react";
import Banner from "./Banner";
import Mission from "./Mission";
import Services from "./Services";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Mission />
      <Services />
      <Portfolio />
    </React.Fragment>
  );
};

export default Home;
