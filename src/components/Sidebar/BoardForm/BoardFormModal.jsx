import { useState } from "react";
import css from "./BoardFormModal.module.css";

const BoardFormModal = ({ onSubmit, onClose, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [icon, setIcon] = useState(initialData.icon || "icon1");
  const [background, setBackground] = useState(
    initialData.background || "none"
  );
  const [error, setError] = useState("");

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
          <label>
            <input
              type="radio"
              name="icon"
              value="icon1"
              checked={icon === "icon1"}
              onChange={() => setIcon("icon1")}
            />
            1
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon2"
              checked={icon === "icon2"}
              onChange={() => setIcon("icon2")}
            />
            2
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon3"
              checked={icon === "icon3"}
              onChange={() => setIcon("icon3")}
            />
            3
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon4"
              checked={icon === "icon4"}
              onChange={() => setIcon("icon4")}
            />
            4
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon5"
              checked={icon === "icon5"}
              onChange={() => setIcon("icon5")}
            />
            5
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon6"
              checked={icon === "icon6"}
              onChange={() => setIcon("icon6")}
            />
            6
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon7"
              checked={icon === "icon7"}
              onChange={() => setIcon("icon7")}
            />
            7
          </label>
          <label>
            <input
              type="radio"
              name="icon"
              value="icon8"
              checked={icon === "icon8"}
              onChange={() => setIcon("icon8")}
            />
            8
          </label>
        </div>
      </div>
      <div>
        <p className={css.icons_p}>Background</p>
        <div className={css.background}>
          <label>
            <input
              type="radio"
              name="background"
              value="none"
              checked={background === "none"}
              onChange={() => setBackground("none")}
            />
            None
          </label>
          <label>
            <input
              type="radio"
              name="background"
              value="background1"
              checked={background === "background1"}
              onChange={() => setBackground("background1")}
            />
            Background 1
          </label>
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
