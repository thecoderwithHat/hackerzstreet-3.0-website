import About from "@/app/components/About";
import React from "react";
import HomePage from "@/app/components/Home";

const Home = () => {
  return (
    <div className="w-full">
      <HomePage />
      <About />
    </div>
  );
};

export default Home;
