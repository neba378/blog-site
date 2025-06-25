"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Button } from "./ui/button";
import { Blog } from "@/types/blogs";

const Popular = () => {
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

  blogs.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <>
      <div className="main-section my-10">
        <div className="top flex flex-row justify-between items-center px-8 lg:px-[80px] py-5">
          <h1 className="left text-3xl md:text-4xl lg:text-5xl font-bold p-2">
            Popular Posts
          </h1>
          <a href="/blogs">
            <Button
              variant="secondary"
              className="bg-primaryPurple text-white rounded-[15px] py-8 px-10 hover:bg-primaryPurple/80 transition-all duration-300 ease-in-out"
            >
              <h6>View all</h6>
            </Button>
          </a>
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

export default Popular;
