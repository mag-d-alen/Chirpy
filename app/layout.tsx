import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "../components/layout/layout";
import NextAuthProvider from "../app/context";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Chirpy",
  description: "Challenge-Improve-Practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
