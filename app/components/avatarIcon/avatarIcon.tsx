import React from "react";
import Image from "next/image";
type AvatarIconProps = {
  src: string;
  alt: string;
};
const AvatarIcon: React.FC<AvatarIconProps> = ({ src, alt }) => {
  
  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className="rounded-full h-11 w-11 border border-customYellow cursor-pointer hover:brightness-90"
    />
  );
};
export default AvatarIcon;
