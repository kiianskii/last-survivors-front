import { useEffect, useState } from "react";
import css from "./BoardFormModal.module.css";

const icons = ["icon1", "icon2", "icon3"];
const backgrounds = ["none", "background1", "background2"];

const BoardFormModal = ({ onSubmit, onClose, initialState = {} }) => {
  const [title, setTitle] = useState(initialState.title || "");
  const [icon, setIcon] = useState(icons[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialState) {
      setTitle(initialState.title || "");
      setIcon(initialState.icons);
      setBackground(initialState.backgrounds);
    }
  }, [initialState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setError("Title is required");
      return;
    }
    setError("");
    onSubmit({ title, icon, background });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.form_create_modal}>
        <p className={css.new_board}> New Board</p>
        <input
          className={css.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {error && <span>{error}</span>}
      </div>
      <div className={css.icons}>
        <p className={css.icons_p}>Icons</p>
        <div className={css.icons_btn}>
          {icons.map((iconOption) => (
            <label key={iconOption}>
              <input
                type="radio"
                value={iconOption}
                checked={icon === iconOption}
                onChange={(e) => setIcon(e.target.value)}
              />
              {iconOption}
            </label>
          ))}
        </div>
      </div>
      <div>
        <p className={css.icons_p}>Background</p>
        <div className={css.background}>
          {backgrounds.map((backgroundOption) => (
            <label key={backgroundOption}>
              <input
                type="radio"
                value={backgroundOption}
                checked={background === backgroundOption}
                onChange={(e) => setBackground(e.target.value)}
              />
              {backgroundOption}
            </label>
          ))}
        </div>
      </div>
      <button
        className={css.btn_create_cancel}
        onSubmit={onSubmit}
        type="submit"
      >
        Create
      </button>
      <button className={css.btn_close} type="button" onClick={onClose}>
        x
      </button>
    </form>
  );
};

export default BoardFormModal;
