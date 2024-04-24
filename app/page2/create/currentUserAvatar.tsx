import AvatarIcon from "@/app/components/avatarIcon/avatarIcon";
import { getServerSession } from "next-auth";

export default async function CurrentUserAvatar() {
  const session = await getServerSession();
  return <AvatarIcon src={session?.user?.image!} alt={session?.user?.name!} />;
}
