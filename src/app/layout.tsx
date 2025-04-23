import type { Metadata } from "next";
import "./globals.css";

import { Raleway, Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";

const raleway = Raleway({
  weight: ["400", "700"],
  variable: "--font-raleway",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog App",
  description: "this is a simple blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${roboto.variable} antialiased  bg-bodyWhite]`}
      >
        <NavbarMobile />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
