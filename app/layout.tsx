import type { Metadata } from "next";

import { Open_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Provider from "@/components/utils/Provider";
import BackgroundImage from "@/components/BackgroundImage";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${open_Sans.className} relative h-full text-neutral-700 dark:text-neutral-100 bg-white dark:bg-gradient-radial from-stone-900 to-stone-950 tracking-wide`}
      >
        <Provider>
          <Navbar />
          <main>{children}</main>
          {/* <BackgroundImage /> */}
          <Footer />
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
