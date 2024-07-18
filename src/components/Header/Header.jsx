import BurgerMenu from "../Sidebar/BurgerMenu.jsx/BurgerMenu";
import css from "./Header.module.css";
function Header({ toggleSidebar }) {
  return (
    <div className={css.header}>
      <BurgerMenu toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Header;
