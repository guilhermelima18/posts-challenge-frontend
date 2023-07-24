import { useCallback, useState } from "react";
import { api } from "../libs/api";
import { Post } from "../types/post";
import { CreatePost } from "../components/Modal/CreatePostModal/types";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPosts, setTotalPosts] = useState<number>();
  const [getPostsLoading, setGetPostsLoading] = useState(false);
  const [registerPostLoading, setRegisterPostLoading] = useState(false);
  const [deletePostLoading, setDeletePostLoading] = useState(false);

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

  const registerPost = useCallback(async (post: CreatePost) => {
    try {
      setRegisterPostLoading(true);
      const response = await api.post("/posts", { ...post });

      return response;
    } catch {
      throw new Error();
    } finally {
      setRegisterPostLoading(false);
    }
  }, []);

  const deletePost = useCallback(async (postId: number) => {
    try {
      setDeletePostLoading(true);
      const response = await api.delete(`/posts/${postId}`);

      return response;
    } catch {
      throw new Error();
    } finally {
      setDeletePostLoading(false);
    }
  }, []);

  return {
    posts,
    totalPosts,
    getPostsLoading,
    registerPostLoading,
    deletePostLoading,
    getPosts,
    registerPost,
    deletePost,
  };
}
