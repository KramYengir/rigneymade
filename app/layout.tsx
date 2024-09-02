import type { Metadata } from "next";

import { Ubuntu } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Provider from "@/components/utils/Provider";
import BackgroundImage from "@/components/BackgroundImage";

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
      <body
        className={`${ubuntu.className} relative h-[100vh] text-neutral-900 dark:text-neutral-100`}
      >
        <Provider>
          <Navbar />
          <main>{children}</main>
          {/*
              ToDo: Implement Dark Mode
              ToDo: Seperate BG Images into CLient Component
              ToDo: Make dark version of BG Images
              ToDo: Add a footer component
          */}
          <BackgroundImage />
        </Provider>
      </body>
    </html>
  );
}
