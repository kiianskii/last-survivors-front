import { selectId, selectTheme } from "../../redux/auth/authSlice";
import { themeThunk } from "../../redux/auth/operations";
import BurgerMenu from "../Sidebar/BurgerMenu.jsx/BurgerMenu";
import css from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
function Header({ toggleSidebar }) {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const id = useSelector(selectId);
  const handleChange = (event) => {
    const selectedTheme = event.target.value;
    const credentials = { theme: selectedTheme };
    dispatch(themeThunk({ id, credentials }));
  };

  return (
    <div className={css.header}>
      <BurgerMenu toggleSidebar={toggleSidebar} />
      <div className={theme}>
        <select onChange={handleChange} value={theme}>
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
          <option value="violet">Violet Theme</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
