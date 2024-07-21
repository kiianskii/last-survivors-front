import css from "./LogoComponent.module.css";
import sprite from "../../../icons/sprite.svg";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/authSlice";
function LogoComponent() {
  const theme = useSelector(selectTheme);
  return (
    <div className={css.logo}>
      <svg className={css.logo_icon} width="32px" height="32px">
        <use
          href={sprite + (theme === "violet" ? "#icon-logo1" : "#icon-logo")}
        ></use>
      </svg>
      <h1 className={css.pro}>Task Pro</h1>
    </div>
  );
}

export default LogoComponent;
