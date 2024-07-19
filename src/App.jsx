import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Suspense, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ScreensPage from "./pages/ScreensPage/ScreensPage";
import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";
import { fetchBoards } from "./redux/boards/operations";
import { PrivateRoute } from "./routes/PrivateRoute";
import { RestrictedRoute } from "./routes/RestrictedRoute";
import { selectIsLoggedIn } from "./redux/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchBoards());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/welcome" component={<Layout />} />
          }
        >
          <Route path="/:boardId" element={<ScreensPage />}></Route>
        </Route>
        <Route
          path="welcome"
          element={<RestrictedRoute component={<WelcomePage />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
