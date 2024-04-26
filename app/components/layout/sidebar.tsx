import Image from "next/image";
import SidebarMenuItem from "./sidebarMenuItem";
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
        <p className="font-extrabold hidden md:flex font-lg"> Chirpy</p>
      </div>
      {memoizedItems && (
        <div className="flex flex-col gap-4 text-white ">{memoizedItems}</div>
      )}
    </nav>
  );
}
const getItems = (isLoggedIn: boolean) => {
  const items = [
    { name: "home", path: "/" },
    { name: "notes", path: "/notes" },
    {
      name: `${isLoggedIn ? "logout" : "login"}`,
      path: "/login",
    },
  ];
  return items.map((item) => (
    <SidebarMenuItem key={item.name} item={item.name} path={item.path} />
  ));
};
