import { useState } from "react";
import { Icon } from "../../icons/Icon";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { Link, useLocation } from "react-router-dom";
import Validation from "./Validation";
import s from "./AuthForm.module.css";

function AuthForm({
  type = "register",
  onSubmit,
  initialValues,
  title = "Submit",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={Validation(type)}
        >
          <Form className={s.form}>
            {type === "register" && (
              <div className={s.inputContainer}>
                <Field
                  className={s.field}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={s.user_error}
                />
              </div>
            )}
            <div className={s.inputContainer}>
              <Field
                className={s.field}
                type="text"
                name="email"
                placeholder="Enter your email"
                autoComplete="username"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={s.email_error}
              />
            </div>
            <div className={s.inputContainer}>
              <div className={s.passwordField}>
                <Field
                  className={s.field}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder={passwordPlaceholder}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={s.togglePassword}
                  onClick={togglePasswordVisibility}
                >
                  <Icon size={18} id="eye" />
                </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={s.password_error}
                />
              </div>
            </div>
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
