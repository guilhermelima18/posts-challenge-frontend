import { Link } from "react-router-dom";
import { PostCardProps } from "./types";

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="w-[600px] flex flex-col gap-2 p-5 border border-gray-400 rounded-lg">
      <h1 className="text-gray-300 text-xl">{post.title}</h1>
      <p className="text-gray-400 text-sm">{post.body}</p>
      <div className="flex items-center justify-between mt-10">
        <Link
          className="w-36 text-pink-400 text-sm"
          to={`/comments/${post.id}`}
        >
          Visualizar comentários
        </Link>
        <button className="w-36 text-pink-400 text-sm">Excluir postagem</button>
      </div>
    </div>
  );
};
