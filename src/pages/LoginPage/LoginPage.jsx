import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInThunk } from "../../redux/auth/operations";
import AuthForm from "../../components/AuthForm/AuthForm";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    try {
      dispatch(logInThunk(data));
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <AuthForm
      title="Login"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      type="login"
    />
  );
}
