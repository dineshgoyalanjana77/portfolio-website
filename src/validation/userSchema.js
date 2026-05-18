import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required("Name is required."),
  username: yup.string().required("Username is required."),
  email: yup.string().email("Invalid Email").required("Email is required."),
  age: yup
    .number()
    .typeError("Age is required.")
    .required("Age is required.")
    .positive("Age must be positive.")
    .integer("Age must be a whole number."),
});