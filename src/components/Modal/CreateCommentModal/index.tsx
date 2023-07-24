import { useForm } from "react-hook-form";
import { XIcon } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { CommentCard } from "../../Cards/CommentCard";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Loading } from "../../Loading";
import { CreateComment, CreateCommentModalProps } from "./types";
import { createCommentSchema } from "../../../validations/createCommentSchema";

export const CreateCommentModal = ({
  comments,
  getPostCommentsLoading,
  registerPostCommentsLoading,
  onCreateComment,
  onModalClose,
}: CreateCommentModalProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateComment>({
    resolver: yupResolver(createCommentSchema),
    mode: "onChange",
  });

  return (
    <div className="bg-main w-full min-h-screen fixed top-0 left-0 flex items-center justify-center p-2">
      <main className="bg-slate-100 w-[600px] flex flex-col p-5 rounded-lg relative">
        {getPostCommentsLoading ? (
          <div className="w-full flex items-center justify-center my-10">
            <Loading
              type="spinningBubbles"
              color="#333"
              width={40}
              height={40}
            />
          </div>
        ) : comments!.length ? (
          <section className="h-[200px] flex flex-col gap-5 overflow-y-scroll mt-5 mb-10">
            {comments?.map((comment) => (
              <CommentCard
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            ))}
          </section>
        ) : (
          "Não há comentários!!!"
        )}

        <h1 className="text-2xl text-gray-600">Cadastrar novo comentário</h1>

        <button className="absolute top-2 right-2" onClick={onModalClose}>
          <XIcon />
        </button>

        <form
          className="flex flex-col gap-5 mt-5"
          onSubmit={handleSubmit(onCreateComment)}
        >
          <Input
            name="name"
            control={control}
            error={!!errors.name?.message?.length}
            errorMessage={errors?.name?.message}
            placeholder="Nome"
          />
          <Input
            name="email"
            control={control}
            error={!!errors.email?.message?.length}
            errorMessage={errors?.email?.message}
            placeholder="E-mail"
          />
          <Input
            name="body"
            control={control}
            error={!!errors.body?.message?.length}
            errorMessage={errors?.body?.message}
            placeholder="Texto do comentário"
          />

          <Button
            variant="primary"
            className="w-[250px] mx-auto flex items-center justify-center mt-5 disabled:cursor-not-allowed"
            disabled={getPostCommentsLoading}
          >
            {registerPostCommentsLoading ? (
              <Loading
                type="spinningBubbles"
                color="#fff"
                width={30}
                height={30}
              />
            ) : (
              "Cadastrar"
            )}
          </Button>
        </form>
      </main>
    </div>
  );
};
