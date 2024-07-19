import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import Overlay from "../Sidebar/BurgerMenu.jsx/Overlay";
// import ScreensPage from "../../pages/ScreensPage/ScreensPage";
import css from "./Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/authSlice";
import { themeThunk } from "../../redux/auth/operations";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  useEffect(() => {
    if (!theme) {
      dispatch(themeThunk("light"));
    }
  }, [dispatch, theme]);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${css.layout} ${theme}`}>
      <div
        className={`${css.content} ${isSidebarOpen ? css.shiftContent : ""} ${
          isSidebarOpen ? css.contentBlur : ""
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
      </div>
      <Sidebar isOpen={isSidebarOpen} />
      <Overlay isOpen={isSidebarOpen} onClick={toggleSidebar} />

      <Outlet />
      {/* <ScreensPage /> */}
    </div>
  );
}

export default Layout;
