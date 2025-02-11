import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Ubuntu_Mono } from 'next/font/google';
import React from 'react';
import '../styles/globals.css';

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
        className={`${ubuntu_mono.className} antialiased bg-secondary text-primary dark:bg-primary dark:text-secondary`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
