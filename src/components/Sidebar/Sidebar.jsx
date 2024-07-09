import BoardForm from "./BoardForm/BoardForm";
import LogoComponent from "./LogoComponent/LogoComponent";
import css from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={css.sidebar}>
      <LogoComponent />
      <BoardForm />
    </div>
  );
}

export default Sidebar;
