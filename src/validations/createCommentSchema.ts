import * as yup from "yup";

export const createCommentSchema = yup.object({
  name: yup.string().required("Nome é obrigatório."),
  email: yup
    .string()
    .email("E-mail inválido.")
    .required("E-mail é obrigatório."),
  body: yup.string().required("Comentário é obrigatório."),
});
