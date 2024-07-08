import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
// import ScreensPage from "./pages/ScreensPage/ScreensPage";

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="board" element={<ScreensPage />} /> */}
        </Route>
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
