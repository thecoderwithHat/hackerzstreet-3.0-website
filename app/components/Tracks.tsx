"use client";
import React from "react";
import { Poppins } from "next/font/google";
import "@/app/styles/tracks.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
type TrackItemProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  
  const TrackItem: React.FC<TrackItemProps> = ({ icon, title, description }) => {
    return (
      <div className="border-2 border-dashed border-white/50 h-80 rounded-3xl overflow-hidden group">
        <div
          className="flex items-center justify-center h-full w-full
            transition-all duration-300 ease-in-out relative
            hover:bg-[#201a12] hover:backdrop-blur-3xl rounded-3xl"
        >
          <div
            className="transition-all duration-300 ease-in-out transform 
            group-hover:scale-75 group-hover:-translate-y-16"
          >
            {icon}
          </div>
          <div
            className="absolute bottom-6 left-0 w-full px-4 py-4 opacity-0 translate-y-24
            transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
          >
            <p className={`text-center text-lg font-medium ${poppins.className}`}>
              <span className="text-ieeeyellow">{title}</span>
              <span className="text-white"> {description}</span>
            </p>
           
          </div>
        </div>
      </div>
    );
  };
  
  function Tracks() {
    return (
      <main className="bg bg-black text-white mx-5 my-10 px-20 py-10 h-screen rounded-4xl overflow-hidden">
        <div className="flex flex-col items-center z-10">
          <h1 className="text-8xl font-semibold font-yapari">TRACKS</h1>
          <p className={`text-2xl font-medium mt-2 ${poppins.className}`}>
            Choose any one from the following themes for your project
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-16">
          <TrackItem
            icon={<img src="/track_icon_1.svg" alt="Track 1" />}
            title="Sustainable Living"
            description="focuses on reducing environmental impact. It includes carbon footprint tracking, waste management, and eco-friendly shopping, with an aim to conserve resources like water."
          />
          <TrackItem
            icon={<img src="/track_icon_2.svg" alt="Track 2" />}
            title="Healthcare Technology"
            description=" advances in remote patient monitoring and emphasizes mental health support."
          />
          <TrackItem
            icon={<img src="/track_icon_3.svg" alt="Track 3" />}
            title="Social Connectivity and Inclusion "
            description="promotes digital accessibility, encourages language learning and cultural exchange, and bridges generational gaps."
          />
          <TrackItem
            icon={<img src="/track_icon_1.svg" alt="Track 1" />}
            title="Sustainable Living"
            description="focuses on reducing environmental impact. It includes carbon footprint tracking, waste management, and eco-friendly shopping, with an aim to conserve resources like water."
          />
          <TrackItem
            icon={<img src="/track_icon_2.svg" alt="Track 2" />}
            title="Healthcare Technology"
            description=" advances in remote patient monitoring and emphasizes mental health support."
          />
          <TrackItem
            icon={<img src="/track_icon_3.svg" alt="Track 3" />}
            title="Social Connectivity and Inclusion "
            description="promotes digital accessibility, encourages language learning and cultural exchange, and bridges generational gaps."
          />
        </div>
      </main>
    );
  }
  
  export default Tracks;
  