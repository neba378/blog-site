import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="hero-section bg-primaryPurple flex w-full py-[100px] px-8 lg:px-[103px] z-20 ">
        <div className="content-part flex flex-col xs:flex-col sm:flex-col md:flex-row justify-between w-full">
          <div className="absolute -top-9 -left-1 w-[550px] h-60 inset-0 rounded-full ">
            <Image
              src="/images/Vector.png"
              alt="vector Image"
              layout="fill"
              objectFit="cover"
              className="clip-ellipse"
            />
          </div>
          <div className="left-section flex-1 flex flex-col justify-center">
            <h6 className="w-full text-white font-semibold tracking-widest">
              Featured Posts
            </h6>

            <div className="heading-txt">
              <h1 className="text-white font-semibold text-3xl leading-[36px] xs:text-4xl xs:leading-[40px] sm:text-5xl sm:leading-[50px] md:text-6xl md:leading-[60px] lg:tracking-wide lg:leading-[80px] lg:text-7xl mt-10 mb-[30px]">
                How AI will <br /> Change the Future
              </h1>
            </div>
            <div className="text-white text-base xs:text-lg sm:text-xl w-full md:w-[75%] lg:w-[60%] mb-[30px]">
              <p>
                The future of AI will see home robots having enhanced
                intelligence, increased capabilities, and becoming more personal
                and possibly cute. For example, home robots will overcome
                navigation, direction
              </p>
            </div>
            <Link href="#">
              <Button
                variant="secondary"
                className="bg-white rounded py-4 px-6 xs:py-5 xs:px-7 sm:py-6 sm:px-8 mt-7 hover:bg-white/80 transition-all duration-300 ease-in-out"
              >
                <h2 className="text-sm font-bold">Read more</h2>
              </Button>
            </Link>
          </div>
          <div className="right-section flex-1 flex justify-start items-center mt-10">
            <Image
              src="/images/Container1.png"
              alt="Hero Image"
              layout="responsive"
              width={608}
              height={576}
              className="w-full h-auto max-w-[400px] xs:max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
