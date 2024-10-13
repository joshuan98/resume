import React from 'react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import '../styles/globals.css';

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
  title: "Joshua Nee - Software Engineer",
  description: "Resume portfolio of Joshua Nee",
  keywords: "Joshua Nee, Joshua Nee Ting Feng, Joshua, Nee, Nee Ting Feng, Joshua Ting Feng, Software Engineer, Resume, Portfolio, Full Stack Developer, Frontend Developer, Backend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Joshua Nee - Resume</title>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
