"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, Search } from "lucide-react";
import { Input } from "./ui/input";

const NavbarMobile = () => {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);

  return (
    <div className="navbar py-[21px] flex flex-row justify-between items-center px-8 bg-white z-20 lg:hidden">
      <div className="left-side z-20">
        <Link href="/">
          <Image src="/images/Logo.png" alt="My Logo" width={157} height={44} />
        </Link>
      </div>
      <Sheet>
        <SheetTrigger>
          <Menu size={32} strokeWidth={1.75} />
        </SheetTrigger>
        <SheetContent className="w-[300px] bg-white rounded-[20px] shadow-lg shadow-primaryPurple/10 ">
          <SheetHeader className="flex flex-col gap-[50px] h-full p-6">
            <div className="right-side flex flex-col gap-[50px] items-staet ">
              <Link
                href="#"
                className="hover:text-primaryPurple transition-all duration-300 ease-in-out"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="hover:text-primaryPurple transition-all duration-300 ease-in-out"
              >
                About
              </Link>
              <div className="search flex flex-row gap-[10px] items-center py-[5px] hover:text-primaryPurple/80 transition-all duration-300 ease-in-out rounded-[8px]">
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
              <Link href="#" className="z-20">
                <Button
                  variant="secondary"
                  className="bg-primaryPurple text-white rounded py-3 px-6 hover:bg-primaryPurple/80 transition-all duration-300 ease-in-out"
                >
                  <h6>Contact Us</h6>
                </Button>
              </Link>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
