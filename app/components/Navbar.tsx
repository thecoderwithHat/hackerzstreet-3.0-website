"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Schedule", id: "schedule" },
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
      <div className={"block md:hidden"}>
        <Image src={"/hamburger.svg"} alt={"hm"} width={20} height={20} />
      </div>
    </nav>
  );
};

export default Navbar;
