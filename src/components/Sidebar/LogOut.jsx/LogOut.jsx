import { useDispatch } from "react-redux";
import { logOutThunk } from "../../../redux/auth/operations";
import sprite from "../../../icons/sprite.svg";
import css from "./LogOut.module.css";

const LogOut = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.logout_wrap}>
      <button
        className={css.logout_wrap}
        type="button"
        onClick={() => dispatch(logOutThunk())}
      >
        <svg
          className={css.logout_icon}
          width="32px"
          height="32px"
          aria-label="logout sign"
        >
          <use href={sprite + "#icon-log-out"}></use>
        </svg>
        <p className={css.logout_text}>Log Out</p>
      </button>
    </div>
  );
};

export default LogOut;
