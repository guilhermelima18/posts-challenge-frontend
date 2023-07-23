import { useCallback, useState } from "react";
import { api } from "../libs/api";
import { Post } from "../types/post";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPosts, setTotalPosts] = useState<number>();
  const [getPostsLoading, setGetPostsLoading] = useState(false);

  const getPosts = useCallback(async (page: number = 1) => {
    try {
      setGetPostsLoading(true);
      const response = await api.get(`/posts?_page=${page}&_sort=title`);

      if (response.data) {
        const total = Number(response.headers["x-total-count"]);

        setTotalPosts(total);
        setPosts(response.data);
      }
    } catch {
      throw new Error();
    } finally {
      setGetPostsLoading(false);
    }
  }, []);

  return {
    posts,
    totalPosts,
    getPostsLoading,
    getPosts,
  };
}
