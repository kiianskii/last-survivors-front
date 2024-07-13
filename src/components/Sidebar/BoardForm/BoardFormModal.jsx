import { useEffect, useState } from "react";
import css from "./BoardFormModal.module.css";
import { icons } from "../hooks/iconsImages";
import { Icon } from "../../../icons/Icon";

const backgrounds = ["none", "background1", "background2"];

const BoardFormModal = ({ onSubmit, onClose, initialState = {}, title }) => {
  const [name, setTitle] = useState(initialState.name || "");
  const [icon_name, setIcon] = useState(initialState.icon_name || icons[0]);
  const [background_url, setBackground] = useState(
    initialState.background_url || backgrounds
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialState) {
      setTitle(initialState.name || "");
      setIcon(initialState.icon_name || icons[0]);
      setBackground(initialState.background_url || backgrounds[0]);
    }
  }, [initialState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Title is required");
      return;
    }
    setError("");
    const formData = { name, background_url, icon_name };

    if (initialState._id) {
      formData._id = initialState._id;
    }
    console.log("formData:", formData);
    onSubmit(formData);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <p className={css.new_board}>
        {title === "Edit Board" ? "Edit board" : "New board"}
      </p>
      <input
        className={css.input}
        type="text"
        value={name}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      {error && <span>{error}</span>}

      <div className={css.icons}>
        <p className={css.icons_p}>Icons</p>
        <ul className={css.icons_btn}>
          {icons.map((iconOption) => (
            <li
              key={iconOption}
              onClick={() => setIcon(iconOption)}
              className={css.ul_icons}
            >
              <Icon
                size={18}
                id={iconOption}
                className={`${css.icon} ${
                  icon_name === iconOption ? css.selected : ""
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={css.icons_p}>Background</p>
        <div className={css.background}>
          {backgrounds.map((backgroundOption) => (
            <label key={backgroundOption}>
              <input
                type="radio"
                value={backgroundOption}
                checked={background_url === backgroundOption}
                onChange={(e) => setBackground(e.target.value)}
              />
              {backgroundOption}
            </label>
          ))}
        </div>
      </div>
      <button className={css.btn_create_cancel} type="submit">
        <Icon size={14} id="plus" className={css.plus} />
        {title === "Edit Board" ? "Edit" : "Create"}
      </button>
      <button className={css.btn_close} type="button" onClick={onClose}>
        x
      </button>
    </form>
  );
};

export default BoardFormModal;
