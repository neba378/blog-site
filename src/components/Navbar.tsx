"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <>
      <div className="navbar py-[21px] flex-row justify-between items-center px-8 lg:px-[103px] bg-white z-20 hidden lg:flex text-black">
        <div className="left-side z-20">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="My Logo"
              width={157}
              height={44}
            />
          </Link>
        </div>
        <div className="right-side flex flex-row gap-[50px] items-center ">
          <Link
            href="/blogs"
            className={`hover:text-primaryPurple transition-all duration-300 ease-in-out ${
              pathname === "/blogs" ? "text-primaryPurple" : ""
            }`}
          >
            Blogs
          </Link>
          <Link
            href="#about"
            className={`hover:text-primaryPurple transition-all duration-300 ease-in-out ${
              pathname === "/about" ? "text-primaryPurple" : ""
            }`}
          >
            About
          </Link>
          <div className="search flex flex-row gap-[10px] items-center px-[10px] py-[5px] hover:text-primaryPurple/80 transition-all duration-300 ease-in-out rounded-[8px]">
            <Search
              strokeWidth={0.75}
              onClick={() => setSearchVisible(!searchVisible)}
            />
            <Input
              className={
                searchVisible
                  ? "border border-[#E4E4E7] rounded-[8px] "
                  : "hidden"
              }
            />
          </div>
          <Link href="#contact" className="z-20">
            <Button
              variant="secondary"
              className="bg-primaryPurple text-white rounded py-3 px-6 hover:bg-primaryPurple/80 transition-all duration-300 ease-in-out"
            >
              <h6>Contact Us</h6>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
