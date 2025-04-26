import AboutCard from "@/components/AboutCard";
import Image from "next/image";
import React from "react";

const datas = [
  {
    name: "Brainstorming",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated",
    number: "01",
  },
  {
    name: "Analysing",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.",
    number: "02",
  },
  {
    name: "News Publishing",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    number: "03",
  },
];
const page = () => {
  return (
    <>
      <div className="main-about px-8 lg:px-[103px] my-20 z-20">
        <div className="main-top flex flex-col justify-center items-center text-center">
          <h6 className="w-full  font-bold tracking-wide text-light">
            ABOUT US
          </h6>
          <div className="heading-txt">
            <h1 className=" font-bold text-2xl leading-[36px] xs:text-3xl xs:leading-[40px] sm:text-4xl sm:leading-[50px] md:text-5xl md:leading-[60px] lg:tracking-wide lg:leading-[80px] lg:text-6xl mt-5 mb-[30px]">
              Creative Blog Writting and <br />
              publishing site
            </h1>
          </div>
          <div className=" text-base xs:text-lg sm:text-xl w-full md:w-[75%] lg:w-[60%] mb-[30px] text-light">
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-15">
          <Image
            src="/images/about-img.png"
            alt="Hero Image"
            //   layout="responsive"
            width={608}
            height={550}
            className="w-full py-14"
          />
        </div>
        <div className="middle px-5 flex flex-col justify-center items-center gap-5">
          <h6 className="w-full  font-bold tracking-wide text-light">
            HOW WE WORK
          </h6>
          <div className="main-top flex flex-row justify-between w-full">
            <div className="heading-txt w-1/2">
              <h1 className=" font-bold text-xl  xs:text-2xl sm:text-3xl md:text-4xl lg:tracking-wide lg:text-5xl mt-5 mb-[30px]">
                I will show you how
                <br /> our team works
              </h1>
            </div>
            <div className=" text-base flex justify-end xs:text-sm sm:text-lg w-1/2 mb-[30px] text-light">
              <p>
                Bring to the table win-win market strategies <br />
                to ensure perfect articles.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-cards w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center py-16">
          {datas.map((data) => (
            <AboutCard
              key={data.number}
              name={data.name}
              description={data.description}
              number={data.number}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
