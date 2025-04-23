import Image from "next/image";
import { Button } from "./ui/button";

const Featured = () => {
  return (
    <>
      <div className="featured w-full mt-20 flex flex-row justify-center items-center p-10 ">
        <div className="main relative rounded-md">
          <div className="img">
            <Image
              src={"/images/Featured.png"}
              alt="Featured Image"
              width={712}
              height={456}
              // layout="responsive"
              // className="w-auto h-fit max-w-full max-h-[576px] rounded-[15px]"
            />
          </div>
          <div className="description-box bg-white rounded-[15px] shadow-lg shadow-primaryPurple/10 p-7  flex flex-col gap-5 xs:gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10">
            <div className="tag-div">
              <span className="font-bold">DEVELOPMENT</span>
              <span className="text-light ml-3">16 March 2023</span>
            </div>
            <div className="main-div">
              <div className="h-div">
                <h1 className="text-4xl md:text-2xl font-bold">
                  How to make a Game look more attractive with New VR & AI
                  Technology
                </h1>
              </div>
              <div className="para-div">
                <p className="text-base md:text-base leading-relaxed">
                  Google has been investing in AI for many years and bringing
                  its benefits to individuals, businesses and communities.
                  Whether it’s publishing state-of-the-art research, building
                  helpful products or developing tools and resources that enable
                  others, we’re committed to making AI accessible to everyone.
                </p>
              </div>
              <Button
                variant="secondary"
                className="bg-white rounded py-4 px-6 xs:py-5 xs:px-7 sm:py-6 sm:px-8 mt-7 hover:bg-white/80 transition-all duration-300 ease-in-out"
              >
                <h2 className="text-sm font-bold">Read more</h2>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
