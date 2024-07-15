import * as Yup from "yup";

export default function Validation(type) {
  const validationSchema = Yup.object().shape({
    name:
      type === "register"
        ? Yup.string()
            .min(3, "Name: min 3 chars")
            .max(15, "Name: max 15 chars")
            .required("Name is required")
        : Yup.string()
            .min(3, "Name: min 3 chars")
            .max(15, "Name: max 15 chars"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password: min 6 chars")
      .required("Password is required"),
  });
  return validationSchema;
}
