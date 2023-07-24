import * as yup from "yup";

export const createPostSchema = yup.object({
  title: yup.string().required("Título é obrigatório."),
  body: yup.string().required("Esse campo é obrigatório."),
});
