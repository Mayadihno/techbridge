import React from "react";
import Banner from "./Banner";
import Mission from "./Mission";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import Article from "./Article";
import Events from "./Events";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Mission />
      <Services />
      <Portfolio />
      <Testimonial />
      <Article />
      <Events />
    </React.Fragment>
  );
};

export default Home;
