"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Blog } from "@/types/blogs";

const Recent = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        "https://blog-site-f3i2.onrender.com/api/v1/blogs"
      );
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  if (blogs.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  blogs.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <>
      <div className="whole flex flex-col   e xs:shadow-lg pt-6 mb-5 mx-10">
        <div className="bottom flex lg:flex-row flex-col md:px-12 px-8 lg:px-[103px] w-full gap-10 justify-center items-center border-gray-300 border-2 sm:border-0 rounded-[15px] ">
          <div className="right-section flex-1 flex justify-start items-center w-full py-5">
            <Image
              src={blogs[0].img_url || "/images/Container0.png"}
              alt="Featured Image"
              width={608}
              height={576}
              className=" w-full rounded-[15px] max-h-[600px] mb-5 "
            />
          </div>
          <div className="description-box  items-start bg-white rounded-[15px] flex flex-1 flex-col gap-3 ">
            <div className="tag-div">
              <span className="font-bold">
                {blogs[0].tags?.[0]?.toUpperCase() || "UNCATEGORIZED"}
              </span>
              <span className="text-light ml-3">16 March 2023</span>
            </div>
            <div className="main-div gap-4 flex flex-col items-start md:justify-center  ">
              <div className="h-div max-w-[100%]">
                <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                  {blogs[0].title}
                </h1>
              </div>
              <div className="para-div max-w-[100%]">
                <p className="text-sm md:text-base lg:text-xl  leading-relaxed">
                  {blogs[0].content.slice(0, 300)}...
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
      <div className="bottom-cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 px-8 lg:px-[80px]">
        {blogs.map((blog) => (
          <Card key={blog._id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Recent;
