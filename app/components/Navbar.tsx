"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
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

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
          draggable="false"

        />
      </div>

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
        className="relative border border-white text-white px-12 py-2 rounded-full overflow-hidden cursor-pointer"
      >
        <span ref={registerTextRef} className="relative z-10 font-bold tracking-tighter">REGISTER</span>
        <div className="hover-text absolute inset-0 bg-[#FFA300] text-white flex items-center text-[15px] justify-center font-bold z-0 tracking-tighter">
          YES! CLICK HERE

        </div>
      </div>
      <div className={"block md:hidden"}>
        <Image src={"/hamburger.svg"} alt={"hm"} width={20} height={20} />
      </div>
    </nav>
  );
};

export default Navbar;
