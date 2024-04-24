import AvatarIcon from "@/app/components/avatarIcon/avatarIcon";
import React from "react";
import Image from "next/image";
import {
  HeartIcon,
  ShareIcon,
  TrashIcon,
  ChartBarIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
export type PostType = {
  id: string;
  username: string;
  avatar: string;
  image?: string | null | undefined;
  text: string;
  timestamp: Date;
};
const Post: React.FC<Partial<PostType>> = ({username, avatar, image, text, timestamp}) => {
  return (
    <div className="w-full flex flex-col gap-4 p-4 bg-veryLight rounded-md md:w-[75%] my-4">
      <div className="w-full flex p-4 gap-4 ">
         <AvatarIcon src={avatar || ''} alt={'user avatar'} />
        <div className="flex flex-col gap-4 w-full">
          <div className="font-bold flex flex-wrap gap-4 ">
            <span className="text-gray-500">{username}</span>
            <h3>{text}</h3>
          </div>
          <div className="text-xs">{timestamp?.toString()}</div>
          {image && (
            <div className="w-full shadow-md rounded-md p-4">
              <Image
                src={image}
                alt={"post image"}
                width={300}
                height={300}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between md:px-8">
        <ShareIcon className="h-9 hoverEffect p-2" />
        <HeartIcon className="h-9 hoverEffect p-2" />
        <TrashIcon className="h-9 hoverEffect p-2" />
        <ChatBubbleLeftIcon className="h-9 hoverEffect p-2" />
        <ChartBarIcon className="h-9 hoverEffect p-2" />
      </div>
    </div>
  );
};
export default Post;
