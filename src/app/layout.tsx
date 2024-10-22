import React from 'react';
import type { Metadata } from "next";
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Ubuntu_Mono } from 'next/font/google'

const ubuntu_mono = Ubuntu_Mono({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Joshua Nee - Software Engineer",
  description: "Personal Portfolio Website of Joshua Nee",
  keywords: "Joshua Nee, Joshua Nee Ting Feng, Joshua, Nee, Nee Ting Feng, Joshua Ting Feng, Joshua Resume, Resume, Personal Portfolio, Portfolio, Joshua Website, Personal Website, Software Engineer, Full Stack Developer, Frontend Developer, Backend Developer",
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
        className={`${ubuntu_mono.className} antialiased bg-black text-white`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
