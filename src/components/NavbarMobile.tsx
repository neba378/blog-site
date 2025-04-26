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
import { usePathname } from "next/navigation";

const NavbarMobile = () => {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsSheetOpen(false); // Close the sheet when a link is clicked
  };

  return (
    <div className="navbar py-[21px] flex flex-row justify-between items-center px-8 bg-white z-20 lg:hidden">
      <div className="left-side z-20">
        <Link href="/">
          <Image src="/images/Logo.png" alt="My Logo" width={157} height={44} />
        </Link>
      </div>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger>
          <Menu size={32} strokeWidth={1.75} />
        </SheetTrigger>
        <SheetContent className="w-[300px] bg-white rounded-[20px] shadow-lg shadow-primaryPurple/10 ">
          <SheetHeader className="flex flex-col gap-[50px] h-full p-6">
            <div className="right-side flex flex-col gap-[50px] items-staet ">
              <Link
                href="/blogs"
                onClick={handleLinkClick}
                className={`hover:text-primaryPurple transition-all duration-300 ease-in-out ${
                  pathname === "/blogs" ? "text-primaryPurple" : ""
                }`}
              >
                Blogs
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
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
              <Link href="/contact" onClick={handleLinkClick} className="z-20">
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
