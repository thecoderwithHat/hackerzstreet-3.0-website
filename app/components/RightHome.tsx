import Image from "next/image";

const RightSection = () => {
  return (
    <div className="flex flex-col items-end space-y-8 text-white font-bold ">
    
      <div className="border-2 border-dashed rounded-xl   w-48 p-4 flex flex-col items-center justify-center">
        <p className="text-8xl text-[#FFA300] tracking-tighter" >75K</p>
        <p className="text-xl tracking-wide font-extrabold">PRIZE POOL</p>
      </div>

      
      <div className="border-2 border-dashed rounded-xl p-4  w-48 flex flex-col items-center justify-center ">
        <p className="text-6xl text-[#FFA300]">04 -</p>
        <div className="h-1 bg-gray-600 w-full my-1"></div>
        <p className="text-6xl text-[#FFA300]">- 05</p>
        <p className="text-2xl">APRIL 2025</p>
      </div>

     
      <div className="grid grid-cols-2 gap-4 ">
        <div className="border-2 border-dashed rounded-lg p-2 cursor-pointer">
          <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
        </div>
        <div className="border-2 border-dashed rounded-lg p-2 cursor-pointer">
          <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />
        </div>
        <div className="border-2 border-dashed rounded-lg p-2 cursor-pointer">
          <Image src="/x.svg" alt="X (formerly Twitter)" width={30} height={30} />
        </div>
        <div className="border-2 border-dashed rounded-lg p-2 cursor-pointer">
          <Image src="/medium.svg" alt="Medium" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;