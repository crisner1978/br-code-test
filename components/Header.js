import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="grid grid-cols-3 sticky top-0 z-50 border-b pt-5 pb-3 sm:px-5 md:px-10 lg:px-20 shadow-sm bg-primary">
      {/* right */}
      <div className="relative flex items-end justify-start top-1 ">
        <ChevronLeftIcon className="inline-flex sm:hidden w-8 cursor-pointer text-white" />
      </div>

      {/* middle */}
      <div className="flex items-end justify-center">
        <h1 className="text-white font-semibold text-[17px] sm:text-xl md:text-2xl lg:text-3xl cursor-pointer">
          Lunch Tyme
        </h1>
      </div>

      {/* right */}
      <div className="relative justify-end flex top-1 h-8 sm:h-10 mr-3">
        <Image
          className="cursor-pointer"
          src="/Cuts/icon_map@2x.png"
          //   width={36}
          //   height={36}
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        />
      </div>
    </header>
  );
};

export default Header;
