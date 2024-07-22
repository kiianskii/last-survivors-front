import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInThunk, registerThunk } from "../../redux/auth/operations";
import AuthForm from "../../components/AuthForm/AuthForm";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const info = {
      username: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      await dispatch(registerThunk(info));
      await dispatch(
        logInThunk({ email: data.email, password: data.password })
      );
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <AuthForm
      type="register"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      title="Register"
    />
  );
}
