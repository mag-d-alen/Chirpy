import Image from "next/image";
import SidebarMenuItem from "./sidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  ArrowRightEndOnRectangleIcon as LoginIcon,
  PuzzlePieceIcon,
  ChatBubbleLeftIcon as ChatIcon,
} from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Sidebar() {
  const session = await getServerSession(authOptions);

  const memoizedItems = getItems(!!session);
  return (
    <nav className="flex flex-col items-start min-h-screen p-4 pr-8 border-r border-light">
      <div className="flex items-center justify-center gap-4 text-red-600 mb-8 w-full">
        <Image
          src="/logo.svg"
          alt="logo"
          className=" object-cover md:inline-flex"
          width={20}
          height={20}
        />
        <p className="font-bold hidden md:flex"> Chirpy</p>
      </div>
      {memoizedItems && (
        <div className="flex flex-col gap-4 text-white ">{memoizedItems}</div>
      )}
    </nav>
  );
}
const getItems = (isLoggedIn: boolean) => {
  const items = [
    { name: "home", icon: HomeIcon, path: "/" },
    {
      name: `${isLoggedIn ? "logout" : "login"}`,
      icon: LoginIcon,
      path: "/login",
    },
    { name: "notes", icon: ChatIcon, path: "/notes" },
  ];
  return items.map((item) => (
    <SidebarMenuItem
      key={item.name}
      item={item.name}
      path={item.path}
    />
  ));
};
