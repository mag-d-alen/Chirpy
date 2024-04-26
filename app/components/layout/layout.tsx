"use client";
import Footer from "./footer";
import React from "react";

import { User } from "next-auth";
import { SessionContext } from "@/app/context";

type Props = {
  children: React.ReactNode;
  user: User;
};

const Layout: React.FC<Props> = ({ children, user }) => {
  return (
      <main className="flex flex-col flex-1">
        <sub className="text-light p-4">
          Hello, {user ? user.name : "Guest"}
        </sub>
        <section className="flex min-h-screen flex-1 flex-col items-center p-8 ">
          {children}
        </section>
        <Footer />
      </main>
  );
};
export default Layout;
