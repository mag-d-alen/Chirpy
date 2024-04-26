import "@/app/globals.css";
import Header from "@/app/components/layout/header";
import Feed from "../page2/feed/feed";
import { Unauthorised } from "@/app/components/layout/unauthorised";
import CreatePost from "../page2/create/createPost";
import PostList from "../page2/feed/postList";

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
