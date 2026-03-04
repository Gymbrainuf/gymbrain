

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Image from 'next/image'
import Link from "next/link";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "GymBrain",
  description: "The smarter way to train",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-slate-800 place-self-start pt-4 pb-3 p-3 rounded-br-3xl py-8 "> 


      <div>
        <Link href="/auth/login">
      <Image
      src="/6522516.png"
      width={50}
      height={50}
      alt="Picture of the author"
    /></Link>
    </div>

      <div className="pt-2">
        <Link href="/auth/login">
    <Image
      src="/body-outline.svg"
      width={50}
      height={50}
      alt="Picture of the author"
    />
    </Link>
    </div>
      
      </div>




          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
