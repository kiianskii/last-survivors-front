import { Formik, Field, Form } from "formik";

import { useDispatch } from "react-redux";
import * as Yup from "yup";

import s from "./EditUserForm.module.css";
import { useSelector } from "react-redux";
import { selectId, selectUser } from "../../redux/auth/authSlice";
import { editUserThunk } from "../../redux/auth/operations";
import EditAvatar from "./EditAvatar";

const EditUserForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userId = useSelector(selectId);

  const initialValues = {
    username: user.name,
    email: user.email,
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Name: min 3 chars")
      .max(15, "Name: max 15 chars"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required field"),
    password: Yup.string().min(6, "Password: min 6 chars"),
  });

  function handleSubmit(data, option) {
    const credentials = {
      ...data,
    };
    console.log(credentials);

    dispatch(editUserThunk({ id: userId, credentials }));
    option.resetForm();
    closeModal();
  }

  return (
    <>
      <EditAvatar />
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <Field className={s.field} type="text" name="username" />
          <Field
            className={s.field}
            type="text"
            name="email"
            autoComplete="username"
          />
          <Field
            className={s.field}
            type="password"
            name="password"
            autoComplete="current-password"
          />
          <button type="submit" className={s.button}>
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default EditUserForm;
