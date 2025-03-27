import Sponsor1 from "@/public/sponsors/sponsor1.svg";
import Sponsor2 from "@/public/sponsors/sponsor2.svg";
import Sponsor3 from "@/public/sponsors/sponsor3.svg";
import Sponsor4 from "@/public/sponsors/sponsor4.svg";
import Sponsor5 from "@/public/sponsors/sponsor5.svg";
import Sponsor6 from "@/public/sponsors/sponsor6.svg";
import Sponsor7 from "@/public/sponsors/sponsor7.svg";
import Image from "next/image";

function Sponsors() {
  const sponsors = [
    Sponsor1,
    Sponsor2,
    Sponsor3,
    Sponsor4,
    Sponsor5,
    Sponsor6,
    Sponsor7,
  ];
  return (
    <div
      className={`flex w-full flex-row flex-wrap items-center justify-around gap-4 px-8 py-4`}
    >
      {sponsors.map((sponsor, index) => (
        <Image
          key={index}
          src={sponsor}
          alt={`Sponsor ${index}`}
          className={"w-16 md:w-auto"}
        />
      ))}
    </div>
  );
}

export default Sponsors;
