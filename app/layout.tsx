import type { Metadata } from "next";

import { Ubuntu, Noto_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Provider from "@/components/utils/Provider";
import BackgroundImage from "@/components/BackgroundImage";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        className={`${notoSans.className} relative h-full text-neutral-700 dark:text-neutral-100 tracking-wide pb-24`}
      >
        <Provider>
          <Navbar />
          <main>{children}</main>
          <BackgroundImage />
        </Provider>
      </body>
    </html>
  );
}
