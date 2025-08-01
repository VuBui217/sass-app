import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ElevU",
  description: "Real-time AI Teaching Platform",
  icons:{
    icon: "/images/logo.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <ClerkProvider appearance={{ variables:{ colorPrimary : '#fe5933'  }}}>
            <Navbar/>
            {children}
          </ClerkProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}