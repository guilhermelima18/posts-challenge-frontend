import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { XIcon } from "lucide-react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { CreatePost, CreatePostModalProps } from "./types";
import { createPostSchema } from "../../../validations/createPostSchema";
import { Loading } from "../../Loading";

export const CreatePostModal = ({
  registerPostLoading,
  onCreatePost,
  onModalClose,
}: CreatePostModalProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePost>({
    resolver: yupResolver(createPostSchema),
    mode: "onChange",
  });

  return (
    <div className="bg-slate-950 w-full h-screen fixed top-0 left-0 flex items-center justify-center p-2">
      <form
        className="bg-slate-100 w-[600px] flex flex-col p-5 rounded-lg relative"
        onSubmit={handleSubmit(onCreatePost)}
      >
        <h1 className="text-2xl text-gray-600">Cadastrar nova postagem</h1>

        <button className="absolute top-2 right-2" onClick={onModalClose}>
          <XIcon />
        </button>

        <div className="flex flex-col gap-5 mt-10">
          <Input
            name="title"
            control={control}
            placeholder="Títilo da postagem"
            error={!!errors?.title?.message}
            errorMessage={errors?.title?.message}
          />
          <Input
            name="body"
            control={control}
            placeholder="Texto da postagem"
            error={!!errors?.body?.message}
            errorMessage={errors?.body?.message}
          />

          <Button
            variant="primary"
            className="w-[250px] mx-auto flex items-center justify-center mt-5 disabled:cursor-not-allowed"
            disabled={registerPostLoading}
          >
            {registerPostLoading ? (
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
        </div>
      </form>
    </div>
  );
};
