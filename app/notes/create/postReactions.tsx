import React from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";

const PostPhoto: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-row justify-between w-full">
        <div className="flex items-center">
          <PhotoIcon className="h-10 hoverEffect p-2" />
        </div>
      </div>
    </div>
  );
};
export default PostPhoto;
