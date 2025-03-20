"use client";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#FFA300] to-black text-white py-8 px-10 ">
    
      <div className="flex flex-col flex-wrap md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-8 w-full">

       
        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:col-span-2">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-center md:text-left">
            HACKERZSTREET <span className="text-sm md:text-2xl">3.0</span>
          </h1>
          <span className="hidden md:block text-8xl">/</span>
          <Image
            src="/ieee.svg"
            alt="IEEE Computer Society MUJ"
            width={250}
            height={70}
          />
        </div>

       
        <div className="flex-1 flex flex-col items-center text-center border-white/50 lg:border-l lg:border-r px-8 space-y-2">
          <p className="font-bold text-lg">Rishi Joshi</p>
          <p>+91 95699 13103</p>
          <p>Chairperson</p>
          <hr className="my-2 border-white/50 w-1/2" />
          <p className="font-bold text-lg">Pranav Bhardwaj</p>
          <p>+91 99995 58266</p>
          <p>Vice-Chairperson</p>
        </div>

       
        <div className="flex flex-col items-center w-full space-y-4 mt-4 lg:mt-0 justify-center">
          <div className="flex items-center space-x-2 text-xl">
            <CiGlobe />
            <a
              href="https://cs.ieeemuj.com/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://cs.ieeemuj.com/
            </a>
          </div>

          <div className="flex space-x-4 text-2xl">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={35}
              height={35}
              className="cursor-pointer hover:opacity-75"
            />
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={35}
              height={35}
              className="cursor-pointer hover:opacity-75"
            />
            <Image
              src="/medium.svg"
              alt="Medium"
              width={35}
              height={35}
              className="cursor-pointer hover:opacity-75"
            />
            <Image
              src="/x.svg"
              alt="X (formerly Twitter)"
              width={35}
              height={35}
              className="cursor-pointer hover:opacity-75"
            />
          </div>

          <p className="text-sm text-center">
            Made with <span className="text-yellow-400">&#x1F49B;</span> by IEEE CS MUJ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
