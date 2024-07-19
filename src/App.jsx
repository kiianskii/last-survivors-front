// import { Route, Routes } from "react-router-dom";
// import "./App.css";

// import { Suspense, useEffect } from "react";
// import Layout from "./components/Layout/Layout";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";

// import WelcomePage from "./pages/WelcomePage/WelcomePage";
// import ErrorPage from "./pages/ErrorPage/ErrorPage";
// import ScreensPage from "./pages/ScreensPage/ScreensPage";
// import { useDispatch } from "react-redux";
// import { refreshThunk } from "./redux/auth/operations";
// import { fetchBoards } from "./redux/boards/operations";
// import { PrivateRoute } from "./routes/PrivateRoute";
// import { RestrictedRoute } from "./routes/RestrictedRoute";

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(refreshThunk());
//     dispatch(fetchBoards());
//   }, [dispatch]);

//   return (
//     <Suspense fallback={<h1>Loading</h1>}>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <PrivateRoute redirectTo="/welcome" component={<Layout />} />
//           }
//         >
//           <Route path="/:boardId" element={<ScreensPage />}></Route>
//         </Route>
//         <Route
//           path="welcome"
//           element={<RestrictedRoute component={<WelcomePage />} />}
//         />
//         <Route
//           path="login"
//           element={<RestrictedRoute component={<LoginPage />} />}
//         />
//         <Route
//           path="register"
//           element={<RestrictedRoute component={<RegisterPage />} />}
//         />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </Suspense>
//   );
// }

// export default App;



import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import { Suspense, useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ScreensPage from "./pages/ScreensPage/ScreensPage";
import { useDispatch } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";
import { fetchBoards } from "./redux/boards/operations";

const App = () => {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const refreshUser = async () => {
      const result = await dispatch(refreshThunk());
      if (result.meta.requestStatus === 'fulfilled') {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    };

    refreshUser();
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchBoards());
    }
  }, [dispatch, isAuth]);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={isAuth ? <Layout /> : <Navigate to="/welcome" />}>
          <Route path="/:boardId" element={<ScreensPage />} />
        </Route>
        <Route path="welcome" element={!isAuth ? <WelcomePage /> : <Navigate to="/" />} />
        <Route path="login" element={!isAuth ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="register" element={!isAuth ? <RegisterPage /> : <Navigate to="/" />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
