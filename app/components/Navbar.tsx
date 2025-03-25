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
          src="https://s3-alpha-sig.figma.com/img/e5ec/a60b/3e05c1069495ebb9d0d74be8cf13e5d8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ERuxOeJygxabr6J7~xeIJv09TIP9wLMQ9DwWykPRpcbfMW0AVg79D4w7qTgpn86q5ML50asOiB1NwLNf-HwgsOEpt~f51PNuuqlrE5~kti~g-vD9KXRibJttvkGZuPRY6XQaWNMv1i-16rjktiVsrUx2RYdQmvH7RuCCeimz8-ZioDa3y3~M~NxBOyLiPYopucuJyLP5gBxVZuvzZJScXpGim8DrsOAqwC03umrtET84azrZzI-lHmvyHJiwyvI7fOUuxOpZ8hpvK9vAIgIo4f5GU92RE3ZoHNyMDwCf7Q2KPPE-8teyHB86HazvYvhpKOSZoJD6lpKmDd9vo9hHFg__"
          alt="logo"
          width={200}
          height={80}
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
