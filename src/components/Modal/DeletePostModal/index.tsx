import { XIcon } from "lucide-react";
import { DeletePostModalProps } from "./types";
import { Button } from "../../Button";
import { Loading } from "../../Loading";

export const DeletePostModal = ({
  deletePostLoading,
  onModalDelete,
  onModalClose,
}: DeletePostModalProps) => {
  return (
    <div className="bg-slate-950 w-full h-screen fixed top-0 left-0 flex items-center justify-center p-2">
      <main className="bg-slate-100 w-[600px] flex flex-col items-center p-5 rounded-lg relative">
        <button className="absolute top-2 right-2" onClick={onModalClose}>
          <XIcon />
        </button>

        <h1 className="max-w-[500px] text-center text-xl text-red-600 mb-10">
          “Atenção! Ao excluir esta postagem os comentários também serão
          excluídos
        </h1>

        <Button
          variant="primary"
          className="w-[250px] mx-auto flex items-center justify-center mt-5 disabled:cursor-not-allowed"
          disabled={deletePostLoading}
          onClick={onModalDelete}
        >
          {deletePostLoading ? (
            <Loading
              type="spinningBubbles"
              color="#fff"
              width={30}
              height={30}
            />
          ) : (
            "Sim, tenho certeza!"
          )}
        </Button>
      </main>
    </div>
  );
};
