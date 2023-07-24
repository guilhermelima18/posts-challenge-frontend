/* eslint-disable @typescript-eslint/no-explicit-any */
import { Comment } from "../../../types/comment";

export type CreateComment = {
  name: string;
  email: string;
  body: string;
};

export type CreateCommentModalProps = {
  comments: Comment[];
  getPostCommentsLoading: boolean;
  registerPostCommentsLoading: boolean;
  onCreateComment: (data: any) => void;
  onModalClose: () => void;
};
