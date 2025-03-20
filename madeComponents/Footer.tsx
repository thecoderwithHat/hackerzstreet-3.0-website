"use client";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-t from-[#FFA300]  to-black text-white py-8 px-10 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
       
        <div className="flex items-center gap-4 text-left w-full">
          <h1 className="text-5xl font-bold tracking-tight">
            HACKERZSTREET <span className="text-2xl">3.0</span>
          </h1>
          <span className="text-8xl">/</span>
          <div>
            <Image
              src="/ieee.svg"
              alt="IEEE Computer Society MUJ"
              width={250}
              height={70}
            />
          </div>
        </div>

      
        <div className="grid grid-cols-2 w-full">
       
          <div className="text-center border-r border-white/50 px-8 border-l">
            <p className="font-bold text-lg">Rishi Joshi</p>
            <p>+91 95699 13103</p>
            <p>Chairperson</p>
            <hr className="my-2 border-white/50" />
            <p className="font-bold text-lg">Pranav Bhardwaj</p>
            <p>+91 99995 58266</p>
            <p>Vice-Chairperson</p>
          </div>

         
          <div className="text-right flex flex-col items-center md:items-end px-8">
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

            <div className="flex space-x-4 my-4 text-2xl">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={40}
                height={40}
                className="cursor-pointer hover:opacity-75"
              />
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={40}
                height={40}
                className="cursor-pointer hover:opacity-75"
              />
              <Image
                src="/medium.svg"
                alt="Medium"
                width={40}
                height={40}
                className="cursor-pointer hover:opacity-75"
              />
              <Image
                src="/x.svg"
                alt="X (formerly Twitter)"
                width={40}
                height={40}
                className="cursor-pointer hover:opacity-75"
              />
            </div>

            <p className="text-sm">
              Made with <span className="text-yellow-400">&#x1F49B;</span> by IEEE
              CS MUJ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;