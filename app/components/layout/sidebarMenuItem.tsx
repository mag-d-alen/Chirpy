import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  ArrowRightEndOnRectangleIcon as LoginIcon,
  PuzzlePieceIcon,
  ChatBubbleLeftIcon as ChatIcon,
} from "@heroicons/react/24/outline";

type SidebarMenuItemProps = {
  item: string;
  path: string;
};
const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ item, path }) => {
  return (
    <Link
      href={path}
      className=" px-4 py-2  rounded-3xl flex justify-center items-center gap-4 hoverEffect">
      {getIcon(item)}
      <span className="hidden md:flex capitalize">{item}</span>
    </Link>
  );
};

const getIcon = (item: string) => {
  switch (item) {
    case "home":
      return <HomeIcon className="w-6 h-6 stroke-white fill-white" />;
    case "library":
      return (
        <PuzzlePieceIcon stroke="white" color="white" className="w-6 h-6" />
      );
    case "login":
      return <LoginIcon color="white" className="w-6 h-6" />;
    case "page2":
      return <ChatIcon color="white" className="w-6 h-6" />;
    default:
      return <HomeIcon color="white" className="w-6 h-6" />;
  }
};

export default SidebarMenuItem;
