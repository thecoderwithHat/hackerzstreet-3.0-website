"use client";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-8 py-16"
    >
      {/* Heading Moved Outside the Grid */}
      <h1 className="text-7xl font-bold text-center tracking-tighter mb-4">
        ABOUT US
      </h1>

      <h2 className="text-yellow-500 text-lg font-bold text-center w-full mb-12">
        IEEE COMPUTER SOCIETY MUJ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        <div className="flex items-center justify-center">
          <div className="rounded-full p-16">
            <Image
              src="/ieeeLogo.svg"
              alt="IEEE CS Logo"
              width={600}
              height={600}
              className="rounded-lg object-cover p-2"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-start">
            {/* SVG as Image */}
            <Image
              src="/cs.svg"
              alt="CS Logo"
              width={400}  // Adjust size as needed
              height={200} // Adjust size as needed
              className="mb-2"
            />

            {/* Underline */}
            {/* <div className="w-20 border-t-2 border-yellow-500"></div> */}
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed mt-4">
            Serving computing at its best with inclusion and diversity is the
            prime motto of the IEEE Computer Society. This society was created
            keeping in mind IEEE’s continued commitment to providing options at
            best. The IEEE Computer Society is driven by the central goals of
            equity, diversity, inclusion, and yearn to serve computing at its
            perfection. With an intent to expand the IEEE’s reach and
            learnings, this society was started a year back in early 2020.
            Since then, society has tried every possible course of action by
            conducting diverse events such as webinars, competitions,
            workshops, and mentorship programs to set a goal for the young
            achievers.
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
