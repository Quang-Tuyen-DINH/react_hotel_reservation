import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

const Rooms = () => {
  return <Hero hero="roomsHero">
    <Banner title="our room">
      <Link to="/" className="btn-primary">return to homepage</Link>
    </Banner>
  </Hero>;
};

export default Rooms;