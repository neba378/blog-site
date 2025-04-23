import Image from "next/image";
import { Button } from "./ui/button";

const Recent = () => {
  return (
    <>
      <div className="whole flex flex-col border-gray-300 border-2 sm:border-0 rounded-[15px] sm:rounded-0 sm:shadow-none xs:shadow-lg py-10">
        <div className="bottom flex lg:flex-row flex-col md:px-12 px-8 lg:px-[103px] w-full gap-10 justify-center items-center">
          <div className="right-section flex-1 flex justify-start items-center w-full ">
            <Image
              src="/images/Featured.png"
              alt="Featured Image"
              width={608}
              height={576}
              className="h-[250px] w-full rounded-[15px] sm:h-[400px] md:h-[500px] "
            />
          </div>
          <div className="description-box  items-start bg-white rounded-[15px] flex flex-1 flex-col gap-3 ">
            <div className="tag-div">
              <span className="font-bold">DEVELOPMENT</span>
              <span className="text-light ml-3">16 March 2023</span>
            </div>
            <div className="main-div gap-4 flex flex-col items-start md:justify-center  ">
              <div className="h-div max-w-[100%]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  How to make a Game look more attractive with New VR & AI
                  Technology
                </h1>
              </div>
              <div className="para-div max-w-[100%]">
                <p className="text-sm md:text-base lg:text-xl  leading-relaxed">
                  Google has been investing in AI for many years and bringing
                  its benefits to individuals, businesses and communities.
                  Whether it’s publishing state-of-the-art research, building
                  helpful products or developing tools and resources that enable
                  others, we’re committed to making AI accessible to everyone.
                </p>
              </div>
              <Button
                variant="secondary"
                className="bg-white py-4  sm:py-6  my-7 border-2 border-primaryPurple p-5 rounded-[15px]  hover:bg-white/80 transition-all duration-300 ease-in-out "
              >
                <h2 className="text-[100%] font-bold text-primaryPurple ">
                  Read more
                </h2>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent;
