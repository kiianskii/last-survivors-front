import { Outlet, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import Overlay from "../Sidebar/BurgerMenu.jsx/Overlay";
// import ScreensPage from "../../pages/ScreensPage/ScreensPage";
import css from "./Layout.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/authSlice";
import { themeThunk } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/loader/loaderSlice";
import Loader from "../Loader/Loader";
import { boardsSelector } from "../../redux/boards/slice";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const boards = useSelector(boardsSelector);
  const index = boards.findIndex((board) => board._id == boardId);
  const theme = useSelector(selectTheme);

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!theme) {
      dispatch(themeThunk("light"));
    }
  }, [dispatch, theme]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const classs = index !== -1 ? boards[index].background_url : "";

  return (
    <div className={`${classs} ${theme}`}>
      <div
        className={`${css.content} ${isSidebarOpen ? css.shiftContent : ""} ${
          isSidebarOpen ? css.contentBlur : ""
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
      <Sidebar isOpen={isSidebarOpen} />
      <Overlay isOpen={isSidebarOpen} onClick={toggleSidebar} />
      {isLoading && <Loader />}
    </div>
  );
}

export default Layout;
