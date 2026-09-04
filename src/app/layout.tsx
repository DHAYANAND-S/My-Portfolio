import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhayanand S | AI Digital Lab & Portfolio",
  description: "Official interactive AI personal portfolio of Dhayanand S — Full Stack Developer, AI Enthusiast, AI & Data Science Undergraduate at Nandha Engineering College, and Department Sports Secretary.",
  keywords: [
    "Dhayanand S",
    "Full Stack Developer",
    "AI Enthusiast",
    "Artificial Intelligence & Data Science",
    "Nandha Engineering College",
    "MERN Stack Developer",
    "Department Sports Secretary",
    "Erode Tamil Nadu India"
  ],
  authors: [{ name: "Dhayanand S", url: "https://github.com/DHAYANAND-S" }],
  openGraph: {
    title: "Dhayanand S | AI Digital Lab & Portfolio",
    description: "Full Stack Developer | AI Enthusiast | B.Tech AI & Data Science Undergraduate",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
