import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      id="about"
      className="footer flex flex-col justify-center items-center px-8 lg:px-[103px] py-16 bg-white z-20"
    >
      <Link href="/">
        <Image src="/images/Logo.png" alt="My Logo" width={157} height={44} />
      </Link>
      <div className="link-list flex flex-row p-5 text-black">
        <Link href="#" className="mx-4 hover:text-primaryPurple">
          Home
        </Link>
        <Link href="/blogs" className="mx-4 hover:text-primaryPurple">
          Blog
        </Link>
        <Link href="#about" className="mx-4 hover:text-primaryPurple">
          About
        </Link>
        <Link href="#contact" className="mx-4 hover:text-primaryPurple">
          Contact Us
        </Link>
      </div>
      <div className="social-media flex flex-row p-2">
        <Link href="#" className="mx-4 ">
          <Facebook size={30} className="text-primaryPurple" />
        </Link>
        <Link href="#" className="mx-4 ">
          <Instagram size={30} className="text-primaryPurple" />
        </Link>
        <Link href="#" className="mx-4 ">
          <Linkedin size={30} className="text-primaryPurple" />
        </Link>
        <Link href="#" className="mx-4 ">
          <Youtube size={30} className="text-primaryPurple" />
        </Link>
      </div>
      <hr className="bg-primaryPurple h-1 w-full my-1" />
      <p>
        Copyright Ideapeel Inc ©{new Date().getFullYear()}. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
