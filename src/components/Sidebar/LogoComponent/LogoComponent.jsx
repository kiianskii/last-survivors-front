import css from "./LogoComponent.module.css";
import sprite from "../../../icons/sprite.svg";
function LogoComponent() {
  return (
    <div className={css.logo}>
      <svg className={css.logo_icon} width="32px" height="32px">
        <use href={sprite + "#icon-logo"}></use>
      </svg>
      <h1 className={css.pro}>Task Pro</h1>
    </div>
  );
}

export default LogoComponent;
