
import { useSelector } from "react-redux";
import BurgerMenu from "../Sidebar/BurgerMenu.jsx/BurgerMenu.jsx";
import css from "./Header.module.css";
import { selectUser } from "../../redux/auth/authSlice.js";
import CustomSelect from "../Select/CustomSelect.jsx";
import { themeThunk } from "../../redux/auth/operations";
import clsx from "clsx";

function Header({ toggleSidebar }) {
    // Temp spread and avatarURL and theme
    const themes = ["dark", "light", "violet"];
    const userInfo = { ...useSelector(selectUser) };
    //userInfo.avatarURL =
    //    "http://res.cloudinary.com/dmcbkckow/image/upload/v1720970849/avatars/spjg2kpl8qvf2pcfyide.webp";
    //userInfo.theme = "light";
    //console.log(userInfo);
    return (
        <div className={clsx(css.header, userInfo.theme + "-header")}>
            <BurgerMenu toggleSidebar={toggleSidebar} />
            <CustomSelect
                name="themes"
                values={themes}
                placeholder="Theme"
                currentTheme={userInfo.theme}
                dispatchFunction={themeThunk}
            />

            {
                //TODO Open edit user modal in onclick
            }
            <button className={css.profile} onClick={0}>
                <p className={css.text}>{userInfo.name}</p>

                <img
                    className={css.img}
                    src={userInfo.avatarURL}
                    alt="User Avatar"
                />
            </button>
        </div>
    );
}

export default Header;
