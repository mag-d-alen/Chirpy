'use client';
import Post, { PostType } from "../post/post";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
import { useGetSnapshotPosts } from "../../../hooks/useGetSnapshotPosts";

const PostList: React.FC = () => {
  const posts = useGetSnapshotPosts();
  return (
    <>
      {posts && posts.map((post: PostType) => (
        <Post
          key={post.id}
          text={post.text}
          username={post.username}
          avatar={post.avatar}
          image={post.image}
          timestamp={post.timestamp}
        />
      ))}
    </>
  );
};
export default PostList;
