import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Notfound = () => {
  return (
    <div className="main-card rounded-[15px] w-[80%] md:w-[50%] h-[40%] md:h-full bg-primaryPurple m-10 py-16 flex flex-col justify-center items-center text-center gap-5 md:gap-16 px-8 lg:px-[103px] my-20 z-20">
      <h1 className="lg:text-9xl md:text-8px sm:text-7xl text-4xl text-white font-semibold">
        404
      </h1>
      <h2 className="md:text-2xl text-sm text-white">
        Sorry! <br /> The link is broken, try to refresh or go to home
      </h2>
      <Link href="/" className="z-20">
        <Button
          variant="secondary"
          className="bg-[#FAFAFA] text-dark rounded py-3 px-6 hover:bg-[#FAFAFA]/80 transition-all duration-300 ease-in-out"
        >
          <h6>Go To Home</h6>
        </Button>
      </Link>
    </div>
  );
};

export default Notfound;
