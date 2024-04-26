import React from "react";
import Button from "../button/button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type LinkButtonProps = {
  link: string;
};
export const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className=" flex items-center gap-2 bg-white py-2 px-4 border-light rounded-full w-[130px] hoverEffect">
      Learn more 
    </a>
  );
};
export default LinkButton;
