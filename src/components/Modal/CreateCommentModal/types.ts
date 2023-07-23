/* eslint-disable @typescript-eslint/no-explicit-any */
import { Comment } from "../../../types/comment";

export type CreateComment = {
  name: string;
  email: string;
  body: string;
};

export type CreateCommentModalProps = {
  comments: Comment[];
  onCreateComment: (data: any) => void;
  getPostCommentsLoading: boolean;
  registerPostCommentsLoading: boolean;
};
