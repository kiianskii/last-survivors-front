import BoardForm from "./BoardForm/BoardForm";
import HelpForm from "./HelpForm/HelpForm";
import LogOut from "./LogOut.jsx/LogOut";
import LogoComponent from "./LogoComponent/LogoComponent";
import css from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={css.sidebar}>
      <LogoComponent />
      <BoardForm />
      <HelpForm />
      <LogOut />
    </div>
  );
}

export default Sidebar;
