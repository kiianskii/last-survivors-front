import css from "./BurgerMenu.module.css";

import { Icon } from "../../../icons/Icon";

const BurgerMenu = ({ toggleSidebar }) => {
  return (
    <div onClick={toggleSidebar}>
      <Icon size={20} id="menu" className={css.burger} />
    </div>
  );
};
export default BurgerMenu;
