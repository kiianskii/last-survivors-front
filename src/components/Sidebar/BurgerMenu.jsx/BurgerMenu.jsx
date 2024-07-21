import css from "./BurgerMenu.module.css";

import { Icon } from "../../../icons/Icon";

const BurgerMenu = ({ toggleSidebar }) => {
  return (
    <div className={css.container} onClick={toggleSidebar}>
      <Icon size={20} id="menu" className={css.burger} />
    </div>
  );
};
export default BurgerMenu;
