import ContactCard from "@/components/Contact-card";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="main-contact flex flex-col justify-center items-center text-center my-12">
        <div className="heading-txt px-8 lg:px-[103px]">
          <h1 className=" font-bold text-2xl leading-[36px] xs:text-3xl xs:leading-[40px] sm:text-4xl sm:leading-[50px] md:text-5xl md:leading-[60px] lg:tracking-wide lg:leading-[80px] lg:text-6xl mt-5 mb-[30px]">
            Get in Touch
          </h1>
        </div>
        <div className=" text-base xs:text-lg sm:text-xl w-full md:w-[75%] lg:w-[60%] mb-[30px] text-light px-8 lg:px-[103px]">
          <p>
            Contact us to publish your content and show ads to our website and
            get a good reach.
          </p>
        </div>

        <ContactCard />
        <div className="flex justify-center py-15 w-full">
          <Image
            src="/images/map-img.png"
            alt="Map Image"
            //   layout="responsive"
            width={608}
            height={550}
            className="w-full py-14"
          />
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default page;
