import { FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function RightSection() {
  return (
    <div className="flex flex-col items-end justify-start space-y-4 text-white font-bold font-yapari">
    
      <div className="border-2 border-white/50 border-dashed rounded-xl w-56 p-4 flex flex-col items-center justify-center">
        <p className="text-5xl text-ieeeyellow tracking-tighter" >60K</p>
        <p className="text-xl tracking-wide font-extrabold">PRIZE POOL</p>
      </div>

      <div className="border-2 border-white/50 border-dashed rounded-xl p-4 w-56 flex flex-col items-center justify-center ">
        <p className="text-5xl text-ieeeyellow">11 -</p>
        <div className="bg-gray-600 w-full mt-1 mb-3 h-0.5"></div>
        <p className="text-5xl text-ieeeyellow">- 12</p>
        <p className="text-xl">APRIL 2025</p>
      </div>
     
      <div className="grid grid-cols-2 gap-2 w-56
      *:p-2 *:border-2 *:border-dashed *:rounded-xl *:cursor-pointer *:border-white/50
      *:hover:bg-ieeeyellow *:hover:text-black *:transition-all *:duration-300 *:ease-in-out
      *:flex *:flex-row *:items-center *:justify-center">
        <div className="">
          <FaInstagram className={"h-8 w-6"} />
        </div>
        <div className="">
          <FaLinkedin className={"h-8 w-6"} />
        </div>
        <div className="">
          <FaMedium className={"h-8 w-6"} />
        </div>
        <div className="">
          <FaXTwitter className={"h-8 w-6"} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
