/* eslint-disable @typescript-eslint/no-explicit-any */

export type CreatePost = {
  title: string;
  body: string;
};

export type CreatePostModalProps = {
  registerPostLoading: boolean;
  onCreatePost: (data: any) => void;
  onModalClose: () => void;
};
