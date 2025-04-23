import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="hero-section bg-primaryPurple flex w-full py-[100px] px-8 lg:px-[103px] z-20 "
      >
        <div className="relative content-part flex flex-col justify-center items-center w-full">
          <div className="absolute -top-40 -left-52 w-[550px] h-60 inset-0 rounded-full ">
            <Image
              src="/images/Vector.png"
              alt="vector Image"
              layout="fill"
              objectFit="cover"
              className="clip-ellipse"
            />
          </div>
          <div className="heading-txt w-full flex flex-col justify-center items-center text-center">
            <h1 className="text-white font-semibold text-2xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-2xl leading-[36px] xs:leading-[40px]  sm:leading-[50px]  md:leading-[60px] lg:leading-[60px]  mt-10 mb-[30px]">
              Get our stories delivered From <br />
              us to your inbox weekly.
            </h1>
          </div>

          <div className="email flex flex-row gap-[10px] items-center  hover:text-primaryPurple/80 transition-all duration-300 ease-in-out rounded-[8px] mb-5">
            <Input
              size={35}
              placeholder="Enter your email"
              className="border border-[#E4E4E7] rounded-[8px] py-6  bg-white  placeholder:text-light "
            />
            <Button
              variant="secondary"
              className="bg-primaryPurple text-white  py-6 px-[5%] hover:bg-primaryPurple/80 transition-all duration-300 ease-in-out border border-white rounded-[10px]"
            >
              <h6 className="font-bold ">Get Started</h6>
            </Button>
          </div>
          <div className=" text-base xs:text-lg sm:text-xl w-full md:w-[75%] lg:w-[60%] mb-[30px] text-light justify-center items-center text-center">
            <p>
              Get a response tomorrow if you submit by 9pm today. If we received
              <br />
              after 9pm will get a reponse the following day.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
