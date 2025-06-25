"use client";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { Blog } from "@/types/blogs";

const BlogsPage = () => {
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

  return (
    <>
      <div className="main-section my-10">
        <div className="main-top flex flex-col justify-center items-center text-center p-8">
          <h6 className="w-full  font-bold tracking-wide text-light">
            OUR BLOGS
          </h6>
          <div className="heading-txt">
            <h1 className=" font-bold text-2xl leading-[36px] xs:text-3xl xs:leading-[40px] sm:text-4xl sm:leading-[50px] md:text-5xl md:leading-[60px] lg:tracking-wide lg:leading-[80px] lg:text-6xl mt-5 mb-[30px]">
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
          {blogs.map((blog) => (
            <Card key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
