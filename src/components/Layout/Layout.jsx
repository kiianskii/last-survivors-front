import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import Overlay from "../Sidebar/BurgerMenu.jsx/Overlay";
// import ScreensPage from "../../pages/ScreensPage/ScreensPage";
import css from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/loader/loaderSlice";
import Loader from "../Loader/Loader";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={css.layout}>
      <div
        className={`${css.content} ${isSidebarOpen ? css.shiftContent : ""} ${
          isSidebarOpen ? css.contentBlur : ""
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
      </div>
      <Sidebar isOpen={isSidebarOpen} />
      <Overlay isOpen={isSidebarOpen} onClick={toggleSidebar} />
      {isLoading && <Loader />}
      <Outlet />
    </div>
  );
}

export default Layout;
