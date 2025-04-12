import About from "@/app/components/About";
import React from "react";
import HomePage from "@/app/components/Home";
import Tracks from "@/app/components/Tracks";
import Sponsors from "@/app/components/Sponsors";
import Schedule from "@/app/components/Schedule";

const Home = () => {
  return (
    <div className="w-full">
      <HomePage />
      <Sponsors />
      <Schedule />
      <Tracks />
      <About />
    </div>
  );
};

export default Home;
