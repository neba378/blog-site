import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Blog } from "@/types/blogs";

type CardProps = {
  blog: Blog;
};

const Card: React.FC<CardProps> = ({ blog }) => {
  return (
    <>
      <div className="bottom flex flex-col justify-center items-center max-w-[688px] p-5 pt-5 bg-white m-3 rounded-xl">
        <div className="right-section flex-1 flex justify-start items-center w-full max-h-[676px]">
          <Image
            src={
              `http://localhost:5000${blog.img_url}` ||
              blog.img_url ||
              "/images/Container0.png"
            }
            alt="Featured Image"
            width={608}
            height={576}
            className=" w-full rounded-[15px] max-h-[600px] mb-5 "
          />
        </div>
        <div className="description-box  items-start bg-white rounded-[15px] flex flex-1 flex-col gap-3 ">
          <div className="tag-div">
            <span className="font-bold text-sm">
              {blog.tags?.[0]?.toUpperCase() || "UNCATEGORIZED"}
            </span>
            <span className="text-light ml-3 text-sm">
              {blog.createdAt || "Unknown Date"}
            </span>
          </div>

          <div className="main-div gap-4 flex flex-col items-start md:justify-center  ">
            <div className="h-div max-w-[100%]">
              <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                {blog.title}
              </h1>
            </div>
            <div className="para-div max-w-[100%]">
              <p className="text-sm md:text-base lg:text-xl  leading-relaxed">
                {blog.content.slice(0, 200)}...
              </p>
            </div>
            <Link
              href={`/blogs/${blog._id}`}
              className="text-[100%] font-bold text-primaryPurple my-5 hover:transition-all duration-300 ease-in-out relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-primaryPurple"
            >
              Read more...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
