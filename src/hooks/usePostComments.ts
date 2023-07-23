import { useCallback, useState } from "react";
import { api } from "../libs/api";
import { Comment } from "../types/comment";

export function usePostComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [getPostCommentsLoading, setGetPostCommentsLoading] = useState(false);
  const [registerPostCommentsLoading, setRegisterPostCommentsLoading] =
    useState(false);

  const getPostComments = useCallback(async (postId: number) => {
    try {
      setGetPostCommentsLoading(true);
      const response = await api.get(`/posts/${postId}/comments`);

      if (response.data) {
        setComments(response.data);
      }
    } catch {
      throw new Error();
    } finally {
      setGetPostCommentsLoading(false);
    }
  }, []);

  const registerPostComments = useCallback(async (comment: Comment) => {
    try {
      setRegisterPostCommentsLoading(true);
      const response = await api.post("/comments", { ...comment });

      return response;
    } catch {
      throw new Error();
    } finally {
      setRegisterPostCommentsLoading(false);
    }
  }, []);

  return {
    comments,
    getPostCommentsLoading,
    registerPostCommentsLoading,
    getPostComments,
    registerPostComments,
  };
}
