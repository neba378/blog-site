import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="hero-section bg-primaryPurple flex w-full py-[100px] px-[103px] ">
        <div className="content-part flex flex-row justify-between w-screen">
          <div className="absolute -top-8  -left-1 w-[550px] inset-0 ">
            <Image
              src="/images/Vector.png" // Your image source
              alt="vextor Image"
              width={777}
              height={378}
              objectFit="cover"
              className="clip-ellipse"
            />
          </div>
          <div className="absolute top-[700px] left-[1400px] w-[550px] h-60 inset-0  ">
            <Image
              src="/images/Vector.png" // Your image source
              alt="vextor Image"
              width={777}
              height={378}
              objectFit="cover"
              className="clip-ellipse-bottom"
            />
          </div>
          <div className="left-section">
            <h6 className="text-white font-semibold tracking-widest z-20">
              Featured Posts
            </h6>

            <h1 className="text-white font-semibold tracking-wide leading-[100px] text-8xl mt-10 mb-[30px] ">
              How AI will <br /> Change the Future
            </h1>
            <div className="text-white text-xl w-[50%] mb-[30px]">
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
                className="bg-white rounded py-6 px-8 mt-7 hover:bg-white/80 transition-all duration-300 ease-in-out"
              >
                <h2 className="text-sm font-bold">Read more</h2>
              </Button>
            </Link>
          </div>
          <div className="right-section w-[65%] z-20">
            <Image
              src="/images/hero.png"
              alt="Hero Image"
              layout="responsive"
              width={608}
              height={576}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
