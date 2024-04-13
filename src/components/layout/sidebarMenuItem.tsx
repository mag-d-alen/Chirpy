import { HomeIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type SidebarMenuItemProps = {
  item: string;
  Icon: any;
  path: string;
};
const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  item,
  Icon,
  path,
}) => {
  return (
    <Link
      href={path}
      className=" px-6 py-2 rounded-3xl  flex justify-center items-center gap-4 hoverEffect">
      <Icon className="h-4" /> <span className="capitalize">{item}</span>
    </Link>
  );
};

export default SidebarMenuItem;
