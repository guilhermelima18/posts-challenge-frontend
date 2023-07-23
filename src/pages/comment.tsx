import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePostComments } from "../hooks/usePostComments";
import { CreateCommentModal } from "../components/Modal/CreateCommentModal";
import { CreateComment } from "../components/Modal/CreateCommentModal/types";

export default function Comment() {
  const { id } = useParams();
  const {
    comments,
    getPostCommentsLoading,
    registerPostCommentsLoading,
    getPostComments,
    registerPostComments,
  } = usePostComments();

  const postId = Number(id);

  const onCreateComment = async (data: CreateComment) => {
    const body = {
      postId,
      ...data,
    };

    const response = await registerPostComments(body);

    if (response.data) {
      await getPostComments(postId);
    }
  };

  useEffect(() => {
    if (postId) {
      getPostComments(postId);
    }
  }, [postId, getPostComments]);

  return (
    <CreateCommentModal
      comments={comments}
      onCreateComment={onCreateComment}
      getPostCommentsLoading={getPostCommentsLoading}
      registerPostCommentsLoading={registerPostCommentsLoading}
    />
  );
}
