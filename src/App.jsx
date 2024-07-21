import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";
import { fetchBoards } from "./redux/boards/operations";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/authSlice";
import { PrivateRoute } from "./routes/PrivateRoute";
import { RestrictedRoute } from "./routes/RestrictedRoute";
import Loader from "./components/Loader/Loader";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
// import Dashboard from "./components/Dashboard/Dashboard";

const Layout = React.lazy(() => import("./components/Layout/Layout"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage/ErrorPage"));
const ScreensPage = React.lazy(() => import("./pages/ScreensPage/ScreensPage"));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchBoards());
    }
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/welcome" component={<Layout />} />
          }
        >
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="/:boardId" element={<ScreensPage />} />
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
