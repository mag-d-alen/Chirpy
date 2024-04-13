import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/layout";

const font = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });

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
    <html lang="en">
      <body className={font.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
