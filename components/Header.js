import { ChevronLeftIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 shadow-sm border-b bg-primary pt-5 pb-3">
      <div className="flex justify-between max-w-6xl px-5 lg:mx-auto md:px-10 lg:px-20">
        <div className="flex items-center top-1 my-auto ">
          <ChevronLeftIcon className="inline-flex sm:hidden w-8 cursor-pointer text-white" />
        </div>

        <div className="flex items-end justify-center sm:ml-10">
          <h1 className="text-white font-semibold text-[17px] sm:text-xl md:text-2xl lg:text-3xl cursor-pointer">
            Lunch Tyme
          </h1>
        </div>

        <div className="relative justify-end flex top-1 w-8 h-8 sm:h-10 sm:w-10 mr-3">
          <Image
            className="cursor-pointer"
            src="/Cuts/icon_map@2x.png"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
