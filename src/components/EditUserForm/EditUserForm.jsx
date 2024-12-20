import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Icon } from "../../icons/Icon";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import s from "./EditUserForm.module.css";
import { selectId, selectUser } from "../../redux/auth/authSlice";
import { editUserThunk } from "../../redux/auth/operations";
import EditAvatar from "./EditAvatar";

const EditUserForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userId = useSelector(selectId);
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    username: user.name,
    email: user.email,
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Name: min 3 chars")
      .max(15, "Name: max 15 chars"),
    email: Yup.string().email("Invalid email"),

    password: Yup.string().min(6, "Password: min 6 chars"),
  });

  const handleSubmit = (data, option) => {
    const credentials = { username: data.username, email: data.email };
    if (!data.password) {
      dispatch(editUserThunk({ id: userId, credentials }));
    } else {
      dispatch(
        editUserThunk({
          id: userId,
          credentials: { ...credentials, password: data.password },
        })
      );
    }
    option.resetForm();
    closeModal();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
          <div className={s.passwordFieldContainer}>
            <Field
              className={`${s.field} ${s.passwordField}`}
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
            />
            <button
              type="button"
              className={s.togglePassword}
              onClick={togglePasswordVisibility}
            >
              <Icon size={18} id="eye" />
            </button>
          </div>
          <button type="submit" className={s.button}>
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default EditUserForm;
