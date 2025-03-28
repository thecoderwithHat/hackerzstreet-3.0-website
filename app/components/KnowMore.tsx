"use client";
import Image from "next/image";

function KnowMore() {
  return (
    <div className="relative mt-2 flex cursor-pointer items-center space-x-2 bg-transparent md:mt-10">
      <div className="w-40 rounded-full border-[1px] border-white/50 px-3 py-2 text-xs font-bold md:w-72 md:px-10 md:py-3 md:text-base">
        Want to know more?
        <br></br>
        <span className={"text-tiny font-light text-white/50 md:text-sm"}>
          Scroll to find out!
        </span>
      </div>
      <Image
        src={"/down.svg"}
        alt={"down arrow"}
        width={70}
        height={70}
        className={
          "absolute -right-5 h-12 w-12 md:-right-10 md:h-auto md:w-auto"
        }
        onClick={() =>
          document
            .getElementById("schedule")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
    </div>
  );
}

export default KnowMore;
