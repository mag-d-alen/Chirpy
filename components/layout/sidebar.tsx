import React, { useId } from "react";
import Image from "next/image";
import SidebarMenuItem from "./sidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";
import { ArrowRightEndOnRectangleIcon as LoginIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const memoizedItems = React.useMemo(() => getItems(), []);
  return (
    <nav className="flex items-start min-h-screen justify-center gap-2 bg-yellow-400 p-8">
      <div className="flex flex-col justify-center items-between gap-8  ">
        <div className="flex items-center justify-center gap-2 text-red-500">
          <Image
            src="/logo.svg"
            alt="logo"
            className=" object-cover md:inline-flex"
            width={20}
            height={20}
          />
          <p className="font-bold"> Chirpy</p>
        </div>
        {memoizedItems}
      </div>
    </nav>
  );
};
export default Sidebar;
const getItems = () => {
  const items = [
    { name: "home", icon: HomeIcon, path: "/" },
    { name: "library", icon: PuzzlePieceIcon, path: "/library" },
    { name: "login", icon: LoginIcon, path: "/login" },
    { name: "page2", icon: HomeIcon, path: "/page2" },
  ];
  return items.map((item) => (
    <SidebarMenuItem
      key={item.name}
      item={item.name}
      Icon={item.icon}
      path={item.path}
    />
  ));
};
