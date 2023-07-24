import { Post } from "../../../types/post";

export type PostCardProps = {
  post: Post;
  handleOpenModalCommentsView: (postId: number) => void;
  handleOpenModalPostDelete: (postId: number) => void;
};
