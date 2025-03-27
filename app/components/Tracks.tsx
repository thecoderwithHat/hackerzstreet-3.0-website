"use client";
import React, { useState } from "react";
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
  const [trackActive, setTrackActive] = useState(false);

  return (
    <div
      className={`border-2 border-dashed border-white/50 rounded-3xl overflow-hidden group transition-all duration-300 ease-in-out relative hover:bg-[#201a12] hover:backdrop-blur-3xl ${trackActive ? 'bg-[#201a12] backdrop-blur-3xl' : ''}`}
      onClick={() => setTrackActive(!trackActive)} 
    >
      
      <div
        className="flex items-center justify-center h-72 w-full rounded-3xl relative"
      >
        <div
          className={`transition-all duration-300 ease-in-out transform group-hover:scale-75 group-hover:-translate-y-16
            ${trackActive ? 'scale-75 -translate-y-16' : ''}`}
        >
          {icon}
        </div>
      </div>


      <div
        className={`absolute bottom-0 left-0 w-full px-4 py-4 md:px-4 md:py-6 transition-all duration-500 ease-in-out group-hover:opacity-100  group-hover:translate-y-0
          ${trackActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      >
        <p
          className={`text-center text-sm  md:text-lg lg:text-md font-medium ${poppins.className}`}
          style={{ lineHeight: "1.4rem" }}
        >
          <span className="text-ieeeyellow">{title}</span>
          <span className="text-white"> {description}</span>
        </p>
      </div>
    </div>
  );
};

function Tracks() {
  return (
    <main 
    id="tracks"
    className="bg bg-black text-white mx-2  px-5 py-15 pb-10 my-10 md:mx-5 md:my-10 md:px-20  md:pb-10 rounded-4xl overflow-x-hidden ">
      <div className="flex flex-col items-center z-10">
        <h1 className="text-5xl md:text-7xl font-semibold font-yapari">TRACKS</h1>
        <p
          className={`text-lg md:text-2xl font-medium mt-1 ${poppins.className}`}
          style={{ textAlign: "center", lineHeight: "1.5rem" }}
        >
          Choose any one from the following themes for your project
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <TrackItem
          icon={<img src="/track_icon_1.svg" alt="Track 1" />}
          title="Sustainable Living"
          description="Focuses on reducing environmental impact. It includes carbon footprint tracking, waste management, and eco-friendly shopping, with an aim to conserve resources like water."
        />
        <TrackItem
          icon={<img src="/track_icon_2.svg" alt="Track 2" />}
          title="Healthcare Technology"
          description="Advances in remote patient monitoring and emphasizes mental health support."
        />
        <TrackItem
          icon={<img src="/track_icon_3.svg" alt="Track 3" />}
          title="Social Connectivity and Inclusion"
          description="Promotes digital accessibility, encourages language learning and cultural exchange, and bridges generational gaps."
        />
        <TrackItem
          icon={<img src="/track_icon_1.svg" alt="Track 1" />}
          title="Sustainable Living"
          description="Focuses on reducing environmental impact. It includes carbon footprint tracking, waste management, and eco-friendly shopping, with an aim to conserve resources like water."
        />
        <TrackItem
          icon={<img src="/track_icon_2.svg" alt="Track 2" />}
          title="Healthcare Technology"
          description="Advances in remote patient monitoring and emphasizes mental health support."
        />
        <TrackItem
          icon={<img src="/track_icon_3.svg" alt="Track 3" />}
          title="Social Connectivity and Inclusion"
          description="Promotes digital accessibility, encourages language learning and cultural exchange, and bridges generational gaps."
        />
      </div>
    </main>
  );
}

export default Tracks;
