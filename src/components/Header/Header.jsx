import { useSelector } from "react-redux";
import BurgerMenu from "../Sidebar/BurgerMenu.jsx/BurgerMenu.jsx";
import css from "./Header.module.css";
import { selectUser } from "../../redux/auth/authSlice.js";
import CustomSelect from "../Select/CustomSelect.jsx";
import { themeThunk } from "../../redux/auth/operations";
import clsx from "clsx";
import { useToggle } from "../../hooks/useToggle.jsx";
import EditUserForm from "../EditUserForm/EditUserForm.jsx";
import Modal from "../Modal/Modal.jsx";
import { Icon } from "../../icons/Icon.jsx";

function Header({ toggleSidebar }) {
    // Temp spread and avatarURL and theme
    const themes = ["dark", "light", "violet"];
    const userInfo = useSelector(selectUser);
    const { openModal, closeModal, isOpen } = useToggle();
    const classname = "class";
    const getDefaultIcon = (theme) => {
        switch (theme) {
            case "dark":
                return <Icon size={32} id="user-2" className={css.img} />;
            case "colorful":
                return <Icon size={32} id="user" className={css.img} />;
            case "light":
            default:
                return <Icon size={32} id="user-1" className={css.img} />;
        }
    };
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
            {isOpen && (
                <Modal
                    title="Edit profile"
                    closeModal={closeModal}
                    classname={classname}
                >
                    <EditUserForm closeModal={closeModal} />
                </Modal>
            )}
            <button className={css.profile} onClick={openModal}>
                <p className={css.text}>{userInfo.name}</p>

                {userInfo.avatarURL ? (
                    <img
                        className={css.img}
                        src={userInfo.avatarURL}
                        alt="User Avatar"
                    />
                ) : (
                    getDefaultIcon(userInfo.theme)
                )}
            </button>
        </div>
    );
}

export default Header;
