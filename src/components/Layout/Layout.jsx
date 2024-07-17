import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import Overlay from "../Sidebar/BurgerMenu.jsx/Overlay";
// import ScreensPage from "../../pages/ScreensPage/ScreensPage";
import css from "./Layout.module.css";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

      <Outlet />
      {/* <ScreensPage /> */}
    </div>
  );
}

export default Layout;
