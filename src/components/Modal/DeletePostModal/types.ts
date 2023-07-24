export type DeletePostModalProps = {
  deletePostLoading: boolean;
  onModalDelete: () => Promise<void>;
  onModalClose: () => void;
};
