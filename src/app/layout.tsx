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
  title: "Joshua Flix | Netflix-Inspired Experience",
  description:
    "A Netflix-styled experience built with Next.js featuring a cinematic intro and curated profile selection.",
  keywords:
    "Joshua Nee, Netflix clone, Netflix inspired, Next.js streaming UI, cinematic intro, profile selector",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu_mono.className} antialiased bg-[#141414] text-neutral-100`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
