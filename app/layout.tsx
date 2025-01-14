import type { Metadata } from "next";

import { Open_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Provider from "@/components/utils/Provider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const open_Sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RigneyMade | Digital Designs",
  description:
    "RigneyMade crafts bespoke websites and logos tailored to the unique needs of small and new businesses. We provide affordable, personalized solutions to help your business make a lasting impression online and can assist with other digital needs to get you started.",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "RigneyMade",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://www.rigneymade.com",
    siteName: "RigneyMade",
    title: "RigneyMade | Digital Designs",
    description:
      "RigneyMade crafts bespoke websites and logos tailored to the unique needs of small and new businesses. We provide affordable, personalized solutions to help your business make a lasting impression online and can assist with other digital needs to get you started.",
    images: [
      {
        url: "https://www.rigneymade.com/og.png",
        width: 1200,
        height: 630,
        alt: "RigneyMade - Digital Designs",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SWBT6ENQH4"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SWBT6ENQH4');
            `,
          }}
        />
      </head>
      <body
        className={`${open_Sans.className} relative h-full text-neutral-700 dark:text-neutral-100 bg-neutral-50 dark:bg-gradient-radial dark:from-stone-800/90 dark:to-stone-950 bg-fixed tracking-wide`}
      >
        <Provider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
