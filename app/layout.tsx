import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "./components/layout/layout";
import { User } from "next-auth";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Sidebar from "@/app/components/layout/sidebar";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Chirpy",
  description: "Practice for front-end development tech interview",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className={font.className}>
      <body className="font-montserrat flex min-h-screen justify-between bg-black text-white">
        <Sidebar />
        <Layout user={session?.user as User}>{children}</Layout>
      </body>
    </html>
  );
}
