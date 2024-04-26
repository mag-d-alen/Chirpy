import "@/app/globals.css";
import Header from "@/app/components/layout/header";

import { Unauthorised } from "@/app/components/layout/unauthorised";
import CreatePost from "./create/createPost";
import Feed from "./feed/feed";
import PostList from "./feed/postList";


export default async function Notes() {
  return (
    <>
      <Header>Notes</Header>
      <Unauthorised>
        <CreatePost />
        <PostList />
        <Feed />
      </Unauthorised>
    </>
  );
}
