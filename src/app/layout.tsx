import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNavBar from "@/components/Home/NavBar/ResponsiveNavBar";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WebDev portfolio",
  description: "WebDev portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${font.className}`}
      >
        <ResponsiveNavBar />
        {children}
      </body>
    </html>
  );
}
