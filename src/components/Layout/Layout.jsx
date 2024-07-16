import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
// import ScreensPage from "../../pages/ScreensPage/ScreensPage";

function Layout() {
  return (
    <div>
      <Header />

      <Sidebar />
      <Outlet />
      {/* <ScreensPage /> */}
    </div>
  );
}

export default Layout;
