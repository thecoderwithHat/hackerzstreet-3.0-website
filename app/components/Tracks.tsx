"use client";
import React from "react";
import { Poppins } from "next/font/google";
import "@/app/styles/tracks.css";
import Image from "next/image";

import HealthcareIcon from "@/public/trackIcons/healthcare.svg";
import FintechIcon from "@/public/trackIcons/fintech.svg";
import EdtechIcon from "@/public/trackIcons/edtech.svg";
import BlockchainIcon from "@/public/trackIcons/blockchain.svg";
import Environmental from "@/public/trackIcons/environmental.png";
import NetworkingIcon from "@/public/trackIcons/networking.svg";

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
    <div className="group relative overflow-hidden rounded-3xl border-2 border-dashed border-white/50 transition-all duration-300 ease-in-out">
      {/* SVG Layer */}
      <div className="relative flex h-72 w-full items-center justify-center rounded-3xl hover:bg-[#201a12] hover:backdrop-blur-3xl">
        <div className="pointer-events-none z-0 transform transition-all duration-300 ease-in-out group-hover:-translate-y-16 group-hover:scale-75">
          {icon}
        </div>
      </div>

      {/* Text Layer */}
      <div className="absolute bottom-0 left-0 z-10 w-full translate-y-16 px-4 py-6 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        <p
          className={`text-center text-lg font-medium md:text-lg ${poppins.className}`}
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
  const tracks = [
    {
      title: "FinTech",
      description:
        "Innovate in financial services with secure, scalable, and user-friendly solutions.",
      icon: FintechIcon,
    },
    {
      title: "Healthcare",
      description:
        "Develop solutions to enhance patient care, diagnostics, and medical accessibility.",
      icon: HealthcareIcon,
    },
    {
      title: "EdTech",
      description:
        "Transform learning experiences through technology-driven educational advancements.",
      icon: EdtechIcon,
    },
    {
      title: "Blockchain",
      description:
        "Leverage decentralized technologies for transparency, security, and trust.",
      icon: BlockchainIcon,
    },
    {
      title: "Environmental Impact",
      description:
        "Build tech-driven solutions to tackle sustainability and climate challenges.",
      icon: Environmental,
    },
    {
      title: "Networking and Communication",
      description:
        "Enhance global connectivity through efficient and seamless communication systems.",
      icon: NetworkingIcon,
    },
  ];
  return (
    <section
      id={"tracks"}
      className="bg mx-2 overflow-x-hidden rounded-4xl bg-black px-5 py-15 pb-0 text-white md:mx-5 md:my-10 md:px-20 md:pb-10"
    >
      <div className="z-10 flex flex-col items-center">
        <h1 className="font-yapari text-4xl font-semibold md:text-8xl">
          TRACKS
        </h1>
        <p
          className={`sm:lg mt-1 text-2xl font-medium md:text-xl ${poppins.className}`}
          style={{ textAlign: "center", lineHeight: "1.5rem" }}
        >
          Choose any one from the following themes for your project
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track, index) => (
          <TrackItem
            key={index}
            icon={
              <Image
                width={100}
                height={100}
                src={track.icon}
                alt={track.title}
              />
            }
            title={track.title}
            description={track.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Tracks;
