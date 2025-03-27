import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

function ScheduleBox({ time, text }: { time: string; text: string }) {
  return (
    <div
      className={`flex ${poppins.className} h-28 min-w-full flex-col items-center rounded-4xl bg-[#1c1c1c] p-4 text-white outline-1 outline-[#F1F1F1] outline-dashed md:h-32 md:min-w-72`}
    >
      <p className="w-32 rounded-full bg-[#3a3a3a] py-2 text-center text-sm font-bold text-white md:w-36 md:text-base">
        {time}
      </p>
      <p className={`text-tiny mt-4 text-center md:text-sm`}>{text}</p>
    </div>
  );
}

export default ScheduleBox;
