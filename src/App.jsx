import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Suspense, useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ScreensPage from "./pages/ScreensPage/ScreensPage";
import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";
import { fetchBoards } from "./redux/boards/operations";
import { fetchColumnsThunk } from "./redux/boardByID/operations";
import { boardsSelector } from "./redux/boards/slice";

function App() {
  const dispatch = useDispatch();
  const boards = useSelector(boardsSelector);
  const [boardId, setBoardId] = useState(null);

  useEffect(() => {
    dispatch(refreshThunk());
    dispatch(fetchBoards());
  }, [dispatch]);

  useEffect(() => {
    if (boards.length > 0) {
      setBoardId(boards[0]._id);
    }
  }, [boards]);

  useEffect(() => {
    if (boardId) {
      dispatch(fetchColumnsThunk(boardId));
    }
  }, [dispatch, boardId]);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="board" element={<ScreensPage />} />
        </Route>
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
