

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInThunk, registerThunk } from "../../redux/auth/operations";
import { selectError } from "../../redux/auth/authSlice";
import AuthForm from "../../components/AuthForm/AuthForm";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const registerError = useSelector(selectError); 

  const handleSubmit = async (data) => {
    const info = {
      username: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const resultAction = await dispatch(registerThunk(info));
      if (registerThunk.fulfilled.match(resultAction)) {
        await dispatch(
          logInThunk({ email: data.email, password: data.password })
        );
        navigate("/");
      } else {
        setError(registerError || "Registration failed.");
      }
    } catch (error) {
      setError("Registration failed.");
      console.error("Error:", error);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div>
      <AuthForm
        type="register"
        onSubmit={handleSubmit}
        initialValues={initialValues}
        title="Register"
        error={error} 
      />
    </div>
  );
}


