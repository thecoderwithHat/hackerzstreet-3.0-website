"use client";
import { FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

function RightSection() {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [elapsed, setElapsed] = useState(false);
  const targetDate = new Date("2025-04-12T05:30:00Z");
  const calculateCountdown = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    if (difference <= 0) {
      setElapsed(true);
      setCountdown({ hours: 0, minutes: 0, seconds: 0 });
      return;
    }
    const totalSeconds = Math.floor(difference / 1000);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setCountdown({ hours, minutes, seconds });
  };

  setTimeout(calculateCountdown, 1);
  setInterval(calculateCountdown, 1000);

  const formatCountdown = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };
  const formattedHours = formatCountdown(countdown.hours);
  const formattedMinutes = formatCountdown(countdown.minutes);
  const formattedSeconds = formatCountdown(countdown.seconds);
  const countdownDisplay = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  return (
    <div className="font-yapari mt-10 flex flex-col items-end justify-start space-y-4 font-bold text-white md:mt-0">
      <div className="flex w-32 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/50 p-2 text-center md:w-56 md:p-4">
        <p className="text-ieeeyellow text-xs tracking-tighter md:text-2xl">
          Problem Statements
        </p>
        {elapsed ? (
          <a
            className="text-tiny font-extrabold md:text-base md:tracking-wide no-underline"
            href={"https://drive.google.com/file/d/1cQLNcxlTQYywZkbdwjANlrDgIl9Yjepl/view?usp=sharing"}
            target="_blank"
          >
            Click Here!
          </a>
        ) : (
          <p className="text-tiny font-extrabold md:text-base md:tracking-wide">
            Goes live in {countdownDisplay}
          </p>
        )}
      </div>
      <div className="flex w-32 flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/50 p-2 md:w-56 md:p-4">
        <p className="text-ieeeyellow text-3xl tracking-tighter md:text-5xl">
          60K
        </p>
        <p className="text-xs font-extrabold md:text-xl md:tracking-wide">
          PRIZE POOL
        </p>
      </div>

      <div className="flex w-32 flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/50 p-2 md:w-56 md:p-4">
        <p className="text-ieeeyellow text-3xl md:text-5xl">
          12 <span className={"opacity-30"}>-</span>
        </p>
        <div className="bg-ieeeyellow mt-2 mb-4 h-[0.3rem] w-[85%] px-2 opacity-30 md:mt-2 md:mb-4 md:h-[0.5rem] md:w-[78%]"></div>
        <p className="text-ieeeyellow text-3xl md:text-5xl">
          <span className={"opacity-30"}>-</span> 13
        </p>
        <p className="text-center text-xl md:text-left">APRIL 2025</p>
      </div>

      <div className="*:hover:bg-ieeeyellow hidden w-56 grid-cols-2 gap-2 *:flex *:cursor-pointer *:flex-row *:items-center *:justify-center *:rounded-xl *:border-2 *:border-dashed *:border-white/50 *:p-2 *:transition-all *:duration-300 *:ease-in-out *:hover:text-black md:grid">
        <a href="https://www.instagram.com/ieee_csmuj/" aria-label="Instagram">
          <div className="">
            <FaInstagram className={"h-8 w-6"} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/ieee-cs-muj"
          aria-label="LinkedIn"
        >
          <div className="">
            <FaLinkedin className={"h-8 w-6"} />
          </div>
        </a>
        <a href="https://medium.com/@ieeecs" aria-label="Medium">
          <div className="">
            <FaMedium className={"h-8 w-6"} />
          </div>
        </a>
        <a href="https://x.com/ieee_csmuj" aria-label="X">
          <div className="">
            <FaXTwitter className={"h-8 w-6"} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default RightSection;
