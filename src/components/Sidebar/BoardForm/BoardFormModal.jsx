import { useEffect, useState } from "react";
import css from "./BoardFormModal.module.css";

const icons = [1, 3, 4];
const backgrounds = ["none", "background1", "background2"];

const BoardFormModal = ({ onSubmit, onClose, initialState = {} }) => {
  const [name, setTitle] = useState(initialState.name || "");
  const [icon_id, setIcon] = useState(initialState.icon_id || icons[0]);
  const [background_url, setBackground] = useState(
    initialState.background_url || backgrounds
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialState) {
      setTitle(initialState.name || "");
      setIcon(initialState.icon_id || icons[0]);
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
    onSubmit({ name, background_url, icon_id });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.form_create_modal}>
        <p className={css.new_board}> New Board</p>
        <input
          className={css.input}
          type="text"
          value={name}
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
                checked={icon_id == iconOption}
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
                checked={background_url === backgroundOption}
                onChange={(e) => setBackground(e.target.value)}
              />
              {backgroundOption}
            </label>
          ))}
        </div>
      </div>
      <button className={css.btn_create_cancel} type="submit">
        Create
      </button>
      <button className={css.btn_close} type="button" onClick={onClose}>
        x
      </button>
    </form>
  );
};

export default BoardFormModal;
