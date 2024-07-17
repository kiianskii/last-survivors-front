// import BoardList from "./BoardList/BoardList";

// import BoardForm from "./BoardForm/BoardForm";
import CreateBoard from "./CreateBoard/CreateBoard";
import HelpForm from "./HelpForm/HelpForm";
import LogOut from "./LogOut.jsx/LogOut";
import LogoComponent from "./LogoComponent/LogoComponent";
import css from "./Sidebar.module.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`${css.sidebar} ${isOpen ? css.open : ""}`}>
      <LogoComponent />
      <CreateBoard />
      <HelpForm />
      <LogOut />
    </div>
  );
}

export default Sidebar;
