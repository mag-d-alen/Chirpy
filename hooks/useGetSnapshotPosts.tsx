import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { PostType } from "@/app/notes/post/post";

export const useGetSnapshotPosts = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const unsubscribe = getPostsSnapshot((data: any) => {
      setPosts(data), {};
    });
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);
  return posts as PostType[] | undefined;
};
function getPostsSnapshot(callback: any, filters = {}) {
  if (typeof callback !== "function") {
    console.log("Error: The callback parameter is not a function");
    return;
  }
  let q = query(collection(db, "posts"));
  const orderedQuery = query(q, orderBy("timestamp", "desc"));

  const unsubscribe = onSnapshot(orderedQuery, (querySnapshot) => {
    const results = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate(),
      };
    });
    callback(results);
  });
  return unsubscribe;
}
