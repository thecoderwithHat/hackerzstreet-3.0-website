"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "@/app/styles/about.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const About = () => {
  const logoRef = useRef(null);
  const [isGolden, setIsGolden] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    timeline.to(logoRef.current, {
      rotateY: 90,
      duration: 1,
      ease: "linear",
      onComplete: () => setIsGolden(true),
    });

    timeline.to(logoRef.current, {
      rotateY: 270,
      duration: 2,
      ease: "linear",
      onComplete: () => setIsGolden(false),
    });

    timeline.to(logoRef.current, {
      rotateY: 360,
      duration: 1,
      ease: "linear",
      onComplete: () => setIsGolden(false),
    });
  }, []);

  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-8 py-16 pt-0 text-white md:pt-16"
    >
      <h1
        className={`font-yapari pt-20 text-center text-4xl font-bold tracking-tighter md:pt-0 md:text-7xl`}
      >
        ABOUT US
      </h1>

      <h2
        className={`text-ieeeyellow mb-12 w-full text-center text-xl font-bold ${poppins.className} font-extrabold`}
      >
        IEEE COMPUTER SOCIETY MUJ
      </h2>

      <div className="grid w-full max-w-[80%] grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex items-center justify-center md:justify-start">
          <div
            ref={logoRef}
            className="flex rounded-full transform-3d"
          >
            <Image
              src={isGolden ? "/ieeeLogo.svg" : "/csWhite.svg"}
              alt="IEEE CS Logo"
              width={400}
              height={400}
              className={"rounded-full object-cover"}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-start">
            <h3
              className={`mb-2 text-7xl font-extrabold tracking-tighter md:text-9xl ${
                isGolden ? "glow-yellow" : "glow-white"
              } font-yapari flex w-full items-center justify-start`}
            >
              CS
            </h3>
            <div className="border-ieeeyellow w-full border-t-2"></div>
          </div>

          <p
            className={`mt-4 text-sm leading-relaxed text-white ${poppins.className}`}
          >
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
