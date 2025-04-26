import Link from "next/link";
import React from "react";

type AboutCardProps = {
  name: string;
  description: string;
  number: string;
};

const AboutCard = (object: AboutCardProps) => {
  return (
    <>
      <div className="main-about-card w-[30%] flex flex-col gap-8 p-2 hover:transition-all duration-300 ease-in-out hover:scale-[1.02] bg-white hover:bg-primaryPurple hover:rounded-[20px] hover:shadow-lg shadow-primaryPurple/10 px-8 py-10 group">
        <h1 className="text-8xl font-bold text-light group-hover:text-white tracking-wider">
          {object.number}
        </h1>
        <h1 className="text-primaryPurple text-2xl font-bold group-hover:text-white">
          {object.name}
        </h1>
        <p className="text-medium text-md group-hover:text-[#F7F6FE]">
          {object.description}
        </p>

        <span>
          {" "}
          <Link
            href={"/"}
            className="text-[100%] font-bold text-primaryPurple group-hover:text-white my-5 hover:transition-all duration-300 ease-in-out relative hover:after:content-[''] hover:after:absolute hover:after:-bottom-2 hover:after:left-0 hover:after:w-full hover:after:h-[6px] hover:after:bg-white"
          >
            Learn more
          </Link>
        </span>
      </div>
    </>
  );
};

export default AboutCard;
