"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Schedules", id: "schedules" },
  { name: "Tracks", id: "tracks" },
  { name: "About Us", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const registerRef = useRef<HTMLDivElement | null>(null);
  const registerTextRef = useRef<HTMLSpanElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  useEffect(() => {
    if (!registerRef.current || !registerTextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".hover-text", { x: "-100%" });

      registerRef.current?.addEventListener("mouseenter", () => {
        if (registerTextRef.current) {
          gsap.to(registerTextRef.current, {
            opacity: 0,
            duration: 0.3,
          });
        }
        gsap.to(".hover-text", {
          x: "0%",
          duration: 0.4,
          ease: "power2.inOut",
        });
      });

      registerRef.current?.addEventListener("mouseleave", () => {
        if (registerTextRef.current) {
          gsap.to(registerTextRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        }
        gsap.to(".hover-text", {
          x: "-100%",
          duration: 0.4,
          ease: "power2.inOut",
        });
      });
    }, registerRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav className="flex w-full items-center justify-between gap-6 rounded-3xl bg-transparent px-4 py-2 shadow-md md:px-8 md:py-4">
      <div className="flex items-center">
        <Image
          src="/cs_logo.svg"
          alt="cs_logo"
          width={100}
          height={40}
          className="h-12 w-auto rounded-lg md:h-20 md:p-2"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden items-center space-x-6 rounded-full border border-white bg-transparent px-2 py-2 lg:flex">
        {navLinks.map(({ name, id }) => (
          <div
            key={name}
            onClick={() => handleScroll(id)}
            className={`cursor-pointer rounded-full px-4 py-2 font-bold ${
              name === "Home"
                ? "bg-gray-600 text-white"
                : "text-white hover:bg-gray-700"
            } transition-all`}
          >
            {name}
          </div>
        ))}
      </div>

      <div
        ref={registerRef}
        className="relative hidden cursor-pointer overflow-hidden rounded-full border border-white px-6 py-2 text-white md:block"
      >
        <span
          ref={registerTextRef}
          className="relative z-10 font-bold tracking-tighter"
        >
          REGISTER
        </span>
        <div className="hover-text absolute inset-0 z-0 flex items-center justify-center bg-[#FFA300] font-bold tracking-tighter text-white">
          REGISTER
        </div>
      </div>


      <div
        className="block md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Image src="/hamburger.svg" alt="hm" width={20} height={20} />
      </div>


      <div
  className={`fixed top-0 right-0 pt-10 px-8 h-full w-5/6  bg-[#0a0a0a] shadow-lg z-50 transform transition-transform duration-300 rounded-l-4xl ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>


        <div
          className=" flex justify-start"  
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="text-white text-5xl font-light cursor-pointer">&times;</span>
        </div>
        <div
  tabIndex={0}
  className="flex flex-col items-center bg-[#232323] focus:bg-[#FFA300] gap-[0.5px] my-5 px-6 py-2 border-[0.5px] border-[#6A6A6A] rounded-4xl"
>

        <div
             
             
              className={` text-white w-full text-xl text-center font-medium py-2 px-5 rounded-[50px]  
                `}
            >
              REGISTER
            </div>
        </div>

        <div className="flex flex-col items-center  bg-[#232323]  gap-[0.5px] p-3 py-4 border-[0.5px] border-[#6A6A6A] rounded-4xl">
          {navLinks.map(({ name, id }) => (
            <div
              key={name}
              onClick={() => handleScroll(id)}
              className={`cursor-pointer  text-white w-full text-3xl text-center font-medium py-4 px-8 rounded-4xl ${
                name === "Home"
                  ? "bg-[#404041] font-bold"
                  : "hover:bg-gray-700 transition-all"
              }`}
            >
              {name}
            </div>
          ))}
        </div>
      </div>


      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
