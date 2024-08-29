import type { Metadata } from "next";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import desktopBG from "../assets/images/rigneymade-bg.webp";
import mobileBG from "../assets/images/rigneymade-bg-mobile.webp";
import Navbar from "@/components/Navbar";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RigneyMade | Digital Designs",
  description: "Professional digital designs for startups and small businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.className} relative h-[100vh]`}>
        <Navbar />
        <main>{children}</main>

        {/* 
            ToDo: Implement Dark Mode
            ToDo: Seperate BG Images into CLient Component
            ToDo: Make dark version of BG Images
            ToDo: Add a footer component
        */}

        <Image
          src={desktopBG}
          alt="faded background image of various web development graphics"
          className="hidden lg:block absolute inset-0 -z-10 h-full w-full object-cover opacity-80"
        ></Image>
        <Image
          src={mobileBG}
          alt="faded background image of various web development graphics"
          className="lg:hidden absolute inset-0 -z-10 h-full w-full object-cover opacity-80"
        ></Image>
      </body>
    </html>
  );
}
