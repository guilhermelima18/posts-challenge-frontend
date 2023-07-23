import { Button } from "../../Button";
import { Input } from "../../Input";

export const CreatePostModal = () => {
  return (
    <div className="bg-slate-950 w-full h-screen absolute top-0 left-0 flex items-center justify-center">
      <main className="bg-slate-100 w-[600px] flex flex-col p-5 rounded-lg">
        <h1 className="text-2xl text-gray-600">Cadastrar nova postagem</h1>

        <div className="flex flex-col gap-5 mt-10">
          <Input placeholder="Títilo da postagem" />
          <Input placeholder="Texto da postagem" />

          <Button variant="primary" className="w-[250px] mx-auto mt-10">
            Cadastrar
          </Button>
        </div>
      </main>
    </div>
  );
};
