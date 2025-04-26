import Card from "@/components/Card";

const page = () => {
  return (
    <>
      <div className="main-section">
        <div className="main-top flex flex-col justify-center items-center text-center p-8">
          <h6 className="w-full  font-semibold tracking-wide text-light">
            OUR BLOGS
          </h6>
          <div className="heading-txt">
            <h1 className=" font-semibold text-2xl leading-[36px] xs:text-3xl xs:leading-[40px] sm:text-4xl sm:leading-[50px] md:text-5xl md:leading-[60px] lg:tracking-wide lg:leading-[80px] lg:text-6xl mt-5 mb-[30px]">
              Find our all blogs from here
            </h1>
          </div>
          <div className=" text-base xs:text-lg sm:text-xl w-full md:w-[75%] lg:w-[60%] mb-[30px] text-light">
            <p>
              our blogs are written from very research research and well known
              writers writers so that we can provide you the best blogs and
              articles articles for you to read them all along
            </p>
          </div>
        </div>
        <div className="bottom-cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 px-8 lg:px-[80px] ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default page;
