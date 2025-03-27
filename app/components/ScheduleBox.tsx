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
      className={`flex ${poppins.className} h-32 min-w-72 flex-col items-center rounded-4xl bg-[#1c1c1c] p-4 text-white outline-1 outline-[#F1F1F1] outline-dashed`}
    >
      <p className="w-36 rounded-full bg-[#3a3a3a] py-2 text-center font-bold text-white">
        {time}
      </p>
      <p className={`mt-4 text-center text-sm`}>{text}</p>
    </div>
  );
}

export default ScheduleBox;
