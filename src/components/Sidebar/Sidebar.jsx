// import BoardList from "./BoardList/BoardList";

// import BoardForm from "./BoardForm/BoardForm";
import CreateBoard from "./CreateBoard/CreateBoard";
import HelpForm from "./HelpForm/HelpForm";
import LogOut from "./LogOut.jsx/LogOut";
import LogoComponent from "./LogoComponent/LogoComponent";
import css from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={css.sidebar}>
      <LogoComponent />
      <CreateBoard />
      <HelpForm />
      <LogOut />
    </div>
  );
}

export default Sidebar;
