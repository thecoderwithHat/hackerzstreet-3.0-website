import { FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function RightSection() {
  return (
    <div className="font-yapari mt-10 flex flex-col items-end justify-start space-y-4 font-bold text-white md:mt-0">
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
          11 <span className={"opacity-30"}>-</span>
        </p>
        <div className="bg-ieeeyellow mt-2 mb-4 h-[0.3rem] w-[85%] px-2 opacity-30 md:mt-2 md:mb-4 md:h-[0.5rem] md:w-[78%]"></div>
        <p className="text-ieeeyellow text-3xl md:text-5xl">
          <span className={"opacity-30"}>-</span> 12
        </p>
        <p className="text-center text-xl md:text-left">APRIL 2025</p>
      </div>

      <div className="*:hover:bg-ieeeyellow hidden w-56 grid-cols-2 gap-2 *:flex *:cursor-pointer *:flex-row *:items-center *:justify-center *:rounded-xl *:border-2 *:border-dashed *:border-white/50 *:p-2 *:transition-all *:duration-300 *:ease-in-out *:hover:text-black md:grid">
      
      <a href="https://www.instagram.com/ieee_csmuj/">
        <div className="">
            <FaInstagram className={"h-8 w-6"} />
        </div>
        </a>
      <a href="https://www.linkedin.com/company/ieee-cs-muj/posts/?feedView=all">
        <div className="">
          <FaLinkedin className={"h-8 w-6"} />
        </div>        
      </a>
      <a href="https://medium.com/@ieeecs">
      <div className="">
          <FaMedium className={"h-8 w-6"} />
        </div>
      
      </a>  
      <a href="https://x.com/ieee_csmuj">
      <div className="">
          <FaXTwitter className={"h-8 w-6"} />
        </div>
      </a>  
        
      </div>
    </div>
  );
}

export default RightSection;
