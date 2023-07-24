import * as yup from "yup";

export const createPostSchema = yup.object({
  title: yup.string().required(),
  body: yup.string().required(),
});
