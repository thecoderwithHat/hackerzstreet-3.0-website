import Image from "next/image";
import HS_Footer from "@/public/hs_footer.svg";
import CS_Logo from "@/public/ieee_cs.svg"
import { CiGlobe } from "react-icons/ci";
import {Poppins} from "next/font/google";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const Footer = () => {
  
  return (
    <footer
      className="bg-gradient-to-t from-[#FFA300]  to-black text-white py-8 px-10 "
    >
      <div className="md:grid flex flex-wrap md:grid-cols-2 items-center w-full gap-8 lg:gap-0">
        <div className="flex flex-wrap items-center gap-8 w-full justify-between px-8 ">
          <Image src={HS_Footer} alt={"HackerzStreet 3.0"} />
          <span className="text-8xl hidden lg:block ">/</span>
          <Image
            src={CS_Logo}
            alt="IEEE Computer Society MUJ"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  w-full">
          <div className={`text-center lg:border-r-2 border-white 
          px-8 lg:border-l-2 flex flex-col gap-4 ${poppins.className} py-3`}>
            <div>
              <p className="font-bold text-2xl">Rishi Joshi</p>
              <p>+91 95699 13103</p>
              <p>Chairperson</p>
            </div>
            <div>
              <p className="font-bold text-2xl">Pranav Bhardwaj</p>
              <p>+91 99995 58266</p>
              <p>Vice-Chairperson</p>
            </div>
          </div>
          <div className={`text-right flex flex-col  lg:items-start items-center justify-center p-16 py-6 ${poppins.className} `}>
            <div className="flex items-center space-x-2">
              <CiGlobe />
              <a
                href="https://cs.ieeemuj.com/"
                className="underline"
                target="_blank"
                rel="noopener"
              >
                https://cs.ieeemuj.com/
              </a>
            </div>

            <div className={`flex space-x-4 my-4 text-2xl items-center justify-center`}>
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

           
          </div>

          <p className="text-sm text-center">
            Made with <span className="text-yellow-400">&#x1F49B;</span> by IEEE CS MUJ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
