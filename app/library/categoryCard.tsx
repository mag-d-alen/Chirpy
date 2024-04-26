import Link from "next/link";
import React from "react";
import Image from "next/image";

type CategoryCardProps = {
  category: {
    name: string;
    icon: string;
    description: string;
  };
};
const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { icon, name, description } = category;

  return (
    <Link className="w-full lg:w-[45%] " href={`/library/${name}`}>
      <div className="flex flex-col items-center gap-4 w-full h-full border border-light rounded-md p-4 hoverEffect">
        <h2 className="font-bold text-xl">{name}</h2>{" "}
        <Image src={icon} alt={name} width={30} height={30}></Image>
        <div className="text-sm flex ">{description}</div>
        <div className="text-md text-light py-4">
          Practice {name} questions now!
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
