import Image from "next/image";
import HS_Footer from "@/public/hs_footer.svg";
import CS_Logo from "@/public/ieee_cs.svg";
import { CiGlobe } from "react-icons/ci";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#FFA300] to-black px-5 py-8 text-white md:px-10">
      <div className="flex w-full flex-wrap items-center gap-8 md:grid md:grid-cols-2 lg:gap-0">
        <div className="flex w-full flex-wrap items-center justify-between md:gap-8 md:px-8">
          <Image
            src={HS_Footer}
            alt={"HackerzStreet 3.0"}
            className={"h-11 w-auto md:h-auto"}
          />
          <span className="text-5xl font-light md:text-8xl md:font-bold">
            /
          </span>
          <Image
            src={CS_Logo}
            alt="IEEE Computer Society MUJ"
            className={"h-11 w-auto md:h-auto"}
          />
        </div>
        <div className="flex w-full flex-row justify-evenly md:grid md:grid-cols-2">
          <div
            className={`flex flex-col gap-4 border-r-1 border-white pr-4 text-center md:border-r-2 md:px-8 lg:border-l-2 ${poppins.className} justify-evenly py-3`}
          >
            <div>
              <p className="text-xs font-bold md:text-2xl">Rishi Joshi</p>
              <p className={"text-tiny md:text-base"}>+91 95699 13103</p>
              <p className={"text-tiny md:text-base"}>Chairperson</p>
            </div>
            <div>
              <p className="text-xs font-bold md:text-2xl">Pranav Bhardwaj</p>
              <p className={"text-tiny md:text-base"}>+91 99995 58266</p>
              <p className={"text-tiny md:text-base"}>Vice-Chairperson</p>
            </div>
          </div>
          <div
            className={`flex flex-col items-center justify-center py-6 pl-4 text-right md:p-16 lg:items-start ${poppins.className} `}
          >
            <div className="flex items-center space-x-2">
              <CiGlobe />
              <a
                href="https://cs.ieeemuj.com/"
                className="text-xs underline md:text-base"
                target="_blank"
                rel="noopener"
              >
                https://cs.ieeemuj.com/
              </a>
            </div>

            <div
              className={`my-4 flex items-center justify-center space-x-2 text-2xl *:w-6 md:space-x-4 md:*:w-auto`}
            >
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
            <p className="text-tiny text-center md:text-sm">
              Made with <span className="text-yellow-400">&#x1F49B;</span> by
              IEEE CS MUJ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
