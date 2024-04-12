import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-start gap-2 bg-yellow-400 p-4 border-solid border-0 border-b border-red-400
    ">
      <Image
        src="/logo.png"
        alt="logo"
        className=" object-cover md:inline-flex"
        width={20}
        height={20}
      />
      Chirpy
    </div>
  );
};
export default Navbar;
