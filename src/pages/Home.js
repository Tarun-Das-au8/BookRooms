import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/Rooms/FeaturedRooms";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="Luxury Rooms" subTitle="Deluxe Rooms Starting from $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <FeaturedRooms />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
