import React from "react";
import PostForm from "../postForm/postForm";
import CurrentUserAvatar from "./currentUserAvatar";
import PostPhoto from "./postReactions";


const CreatePost = () => {

  return (
    <div className="flex shadow-md rounded-md gap-4 p-4 w-full md:w-[75%]">
      <CurrentUserAvatar />
      <div className=" flex flex-col w-full">
        <PostForm/>
        <PostPhoto />
      </div>
    </div>
  );
};
export default CreatePost;
