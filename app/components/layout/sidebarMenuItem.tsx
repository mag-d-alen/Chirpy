import Link from "next/link";
import React from "react";
import {
  HomeIcon,
  ArrowRightEndOnRectangleIcon as LoginIcon,
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
      className=" px-4 py-2  rounded-3xl flex justify-center items-center gap-4 hoverEffect bg-light text-black font-bold">
      {getIcon(item)}
      <span className="hidden md:flex capitalize">{item}</span>
    </Link>
  );
};

const getIcon = (item: string) => {
  switch (item) {
    case "home":
      return <HomeIcon className="w-6 h-6" />;
    case "login":
    case "logout":
      return <LoginIcon className="w-6 h-6" />;
    case "notes":
      return <ChatIcon className="w-6 h-6" />;
    default:
      return <HomeIcon className="w-6 h-6" />;
  }
};

export default SidebarMenuItem;
