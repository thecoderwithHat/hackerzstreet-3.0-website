"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "@/app/about.css";
import { Inter } from 'next/font/google';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const About = () => {
  const logoRef = useRef(null);
  const [isGolden, setIsGolden] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    timeline.to(logoRef.current, {
      rotateY: 180,
      duration: 2,
      ease: "linear",
      onComplete: () => setIsGolden(true),
    });

    timeline.to(logoRef.current, {
      rotateY: 360,
      duration: 2,
      ease: "linear",
      onComplete: () => setIsGolden(false),
    });
  }, []);

  return (
    <section
      id="about"
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-8 py-16 w-full"
    >
      <h1 className={`text-7xl font-bold text-center tracking-tighter mb-4 ${inter.className}`}>
        ABOUT US
      </h1>

      <h2 className={`text-yellow-500 text-lg font-bold text-center w-full mb-12 ${inter.className} font-extrabold`}>
        IEEE COMPUTER SOCIETY MUJ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        <div className="flex items-center justify-center md:justify-start">
          <div
            ref={logoRef}
            className="rounded-full flex"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src={isGolden ? "/ieeeLogo.svg" : "/csWhite.svg"}
              alt="IEEE CS Logo"
              width={400}
              height={400}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-start">
            <h3
              className={`text-9xl font-extrabold tracking-tighter mb-2 ${
                isGolden ? "glow-yellow" : "glow-white"
              } flex items-center justify-center w-full md:block ${inter.className}`}
            >
              CS
            </h3>

            <div className="w-20 border-t-2 border-yellow-500 hidden md:block"></div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mt-4">
          Serving computing at its best with inclusion and diversity is the
            prime motto of the IEEE Computer Society. This society was created
            keeping in mind IEEE’s continued commitment to providing options at
            best. The IEEE Computer Society is driven by the central goals of
            equity, diversity, inclusion, and yearn to serve computing at its
            perfection. With an intent to expand the IEEE’s reach and learnings,
            this society was started a year back in early 2020. Since then,
            society has tried every possible course of action by conducting
            diverse events such as webinars, competitions, workshops, and
            mentorship programs to set a goal for the young achievers.
            <br />
            <br />
            The members of IEEE CS have been skilled and earned minimal
            expertise in roughly all possible sub-sections of CS via our
            accelerator program. The senior student mentors steer them on each
            stage they take and deliver them with the professional material for
            further reference. We aim to proactively support diversity and
            inclusion by being the premier source for information, inspiration,
            and collaboration in computer science and engineering. Connecting
            members on campus, this IEEE Computer Society empowers the students
            who wish to advance in technology by delivering tools at all stages
            of their professional careers. “Computer science is the operating
            system for all innovations.” At IEEE CS, we look at it similarly,
            trying to make a better world by working as a team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
