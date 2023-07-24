import { Trash, ScrollText } from "lucide-react";
import { PostCardProps } from "./types";

export const PostCard = ({
  post,
  handleOpenModalCommentsView,
  handleOpenModalPostDelete,
}: PostCardProps) => {
  return (
    <div className="w-full flex flex-col gap-2 p-5 border border-gray-400 rounded-lg">
      <h1 className="text-gray-300 text-xl">{post.title}</h1>
      <p className="text-gray-400 text-sm">{post.body}</p>
      <div className="flex items-center justify-between mt-10">
        <button
          className="w-52 text-pink-400 text-sm flex items-center gap-2"
          onClick={() => handleOpenModalCommentsView(post.id)}
        >
          <ScrollText size={20} />
          Visualizar comentários
        </button>
        <button
          className="text-pink-400 text-sm"
          onClick={() => handleOpenModalPostDelete(post.id)}
        >
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
};
