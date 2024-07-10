import { Field, Form, Formik } from "formik";
import { Link, useLocation } from "react-router-dom";
import s from "./AuthForm.module.css";

function AuthForm({
  type = "register",
  onSubmit,
  initialValues = {},
  title = "Submit",
}) {
  const passwordPlaceholder =
    type === "register" ? "Create a password" : "Confirm a password";

  const buttonText = type === "register" ? "Register Now" : "Log In Now";
  const location = useLocation();
  return (
    <div className={s.conteiner}>
      <div className={s.formAuth}>
        <div className={s.links}>
          <Link
            to="/register"
            className={`${s.link} ${
              location.pathname === "/register" ? s.active : ""
            }`}
          >
            Registration
          </Link>
          <Link
            to="/login"
            className={`${s.link} ${
              location.pathname === "/login" ? s.active : ""
            }`}
          >
            Log In
          </Link>
        </div>

        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          <Form className={s.form}>
            {type === "register" && (
              <Field
                className={s.field}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            )}
            <Field
              className={s.field}
              type="text"
              name="email"
              placeholder="Enter your email"
              autoComplete="username"
            />
            <Field
              className={s.field}
              type="password"
              name="password"
              placeholder={passwordPlaceholder}
              autoComplete="current-password"
            />
            <button type="submit" className={s.button}>
              {buttonText}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default AuthForm;
