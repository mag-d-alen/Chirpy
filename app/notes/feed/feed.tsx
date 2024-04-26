
import Post, { PostType } from "../post/post";
import { getPosts } from "@/app/actions";

const Feed = async () => {
  const data = await getPosts() as PostType[];
  return (
    <>
      {data.map((post: PostType) => (
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
export default Feed;
