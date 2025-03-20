"use client";
import Image from "next/image";
import { Inter } from 'next/font/google';
import RightSection from "./RightHome";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const HomePage = () => {
  return (
    <main className="bg-black text-white px-20 py-10">
      {/* Top Section */}
      <div className={`text-center ${inter.className}`}>
        <h1 className="text-8xl md:text-[10rem] font-bold">HACKERZSTREET</h1>
        <p className={`text-[#FFA300] text-lg font-bold md:text-2xl mt-2 ${inter.className}`}>
          A 24-HOUR FLAGSHIP HACKATHON BY IEEE CS MUJ
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4">
          <Image src="/n30.svg" alt="3.0" width={150} height={150} />
          <p className="text-sm md:text-base">
            Hackerzstreet 3.0, set to ignite creativity and innovation – an
            intense 24-hour coding marathon packed with excitement and
            collaboration. This event features a single round where
            participants delve into diverse technical themes, each presenting
            unique challenges and opportunities.
          </p>
          <div className="flex items-center space-x-2 bg-transparent text-white rounded-lg cursor-pointer border-2 border-white ">
            <span className="font-bold">Want to know more?</span>
            <span className="text-4xl h-5 w-10 p-10 rounded-full bg-[#FFA300]">&#x2193;</span>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex justify-center items-center">
          {/* <Image
            src="/circle_animation.svg"
            alt="Animated Ring"
            width={300}
            height={300}
            className="animate-spin-slow"
          /> */}
        </div>

        {/* Right Section */}
        {/* <div className="flex flex-col items-end space-y-6">
          <div className="text-right">
            <p className="text-3xl">75K</p>
            <p className="text-sm">PRIZE POOL</p>
          </div>

          <div className="text-right">
            <p className="text-xl">04 -</p>
            <p className="text-xl">- 05</p>
            <p className="text-sm">APRIL 2025</p>
          </div>

          <div className="flex space-x-4 text-2xl">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <Image
              src="/x.svg"
              alt="X (formerly Twitter)"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <Image
              src="/medium.svg"
              alt="Medium"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </div>
        </div> */}
        <RightSection />
      </div>
    </main>
  );
};

export default HomePage;