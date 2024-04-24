import React from "react";
import "../../app/globals.css";
import Header from "@/app/components/layout/header";
import Feed from "./feed/feed";
import { Unauthorised } from "@/app/components/layout/unauthorised";
import CreatePost from "./create/createPost";
import PostList from "./feed/postList";

export default async function Page2() {
  return (
    <>
      <Header>page2</Header>
      <Unauthorised>
        <CreatePost />
        <PostList />
        <Feed />
      </Unauthorised>
    </>
  );
}
