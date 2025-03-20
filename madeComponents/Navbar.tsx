"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Schedules", path: "/schedules" },
  { name: "Tracks", path: "/tracks" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const router = useRouter();
  const registerRef = useRef<HTMLDivElement | null>(null);
  const registerTextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!registerRef.current || !registerTextRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".hover-text", { x: "-100%" });

      registerRef.current?.addEventListener("mouseenter", () => {
        if (registerTextRef.current) {
          gsap.to(registerTextRef.current, { opacity: 0, duration: 0.3 });
        }
        gsap.to(".hover-text", { x: "0%", duration: 0.4, ease: "power2.inOut" });
      });

      registerRef.current?.addEventListener("mouseleave", () => {
        if (registerTextRef.current) {
          gsap.to(registerTextRef.current, { opacity: 1, duration: 0.3 });
        }
        gsap.to(".hover-text", { x: "-100%", duration: 0.4, ease: "power2.inOut" });
      });
    }, registerRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav className="flex items-center justify-between bg-transparent px-8 py-4 rounded-3xl w-full shadow-md gap-6">
      
      <div className="flex items-center">
        <Image
          src="https://s3-alpha-sig.figma.com/img/e5ec/a60b/3e05c1069495ebb9d0d74be8cf13e5d8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ERuxOeJygxabr6J7~xeIJv09TIP9wLMQ9DwWykPRpcbfMW0AVg79D4w7qTgpn86q5ML50asOiB1NwLNf-HwgsOEpt~f51PNuuqlrE5~kti~g-vD9KXRibJttvkGZuPRY6XQaWNMv1i-16rjktiVsrUx2RYdQmvH7RuCCeimz8-ZioDa3y3~M~NxBOyLiPYopucuJyLP5gBxVZuvzZJScXpGim8DrsOAqwC03umrtET84azrZzI-lHmvyHJiwyvI7fOUuxOpZ8hpvK9vAIgIo4f5GU92RE3ZoHNyMDwCf7Q2KPPE-8teyHB86HazvYvhpKOSZoJD6lpKmDd9vo9hHFg__"
          alt="logo"
          width={200}
          height={80}
          className="rounded-lg p-2"
        />
      </div>

     
      <div className="hidden md:flex items-center space-x-6 bg-transparent px-2 py-2 rounded-full border border-white ">
        {navLinks.map(({ name, path }) => (
          <div
            key={name}
            onClick={() => router.push(path)}
            className={`cursor-pointer px-4 py-2 rounded-full font-bold ${
              name === "Home"
                ? "bg-gray-600 text-white"
                : "hover:bg-gray-700 text-white"
            } transition-all`}
          >
            {name}
          </div>
        ))}
      </div>

      
      <div
        ref={registerRef}
        className="relative border border-white text-white px-6 py-2 rounded-full overflow-hidden cursor-pointer"
      >
        <span ref={registerTextRef} className="relative z-10 font-bold tracking-tighter">REGISTER</span>
        <div className="hover-text absolute inset-0 bg-[#FFA300] text-white text-[0.7rem] flex items-center justify-center font-bold z-0 ">
          YES ! CLICK HERE
        </div>
      </div>
    </nav>
  );
};

export default Navbar;