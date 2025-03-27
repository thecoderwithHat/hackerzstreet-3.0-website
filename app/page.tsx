
import About from '@/app/components/About'
import React from 'react'
import HomePage from '@/app/components/Home'
import Tracks from './components/Tracks'

const Home = () => {
  return (
    <div className="w-full ">

      <HomePage />
      <About />
      <Tracks/>
    </div>
  );
};

export default Home;
