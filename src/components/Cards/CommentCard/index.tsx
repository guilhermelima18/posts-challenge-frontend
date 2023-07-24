import { CommentCardProps } from "./types";

export const CommentCard = ({ name, email, body }: CommentCardProps) => {
  return (
    <div className="flex flex-col gap-2 border-b border-gray-300 pb-5">
      <h1 className="text-sm">
        <strong>Nome:</strong> {name}
      </h1>
      <h1 className="text-sm">
        <strong>E-mail</strong> {email}
      </h1>
      <h1 className="text-sm">
        <strong>Comentário:</strong> {body}
      </h1>
    </div>
  );
};
