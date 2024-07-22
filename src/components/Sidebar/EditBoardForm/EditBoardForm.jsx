import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { editBoard } from "../../../redux/boards/operations";
import { Field, Form, Formik } from "formik";
import css from "./EditBoardForm.module.css";
import { icons, backgrounds } from "../hooks/iconsImages.js";
import { Icon } from "../../../icons/Icon";
import BackgroundImage from "../hooks/BackgroundImage.jsx";

const EditBoardForm = ({ board, closeModal }) => {
  const [icon_name, setIcon] = useState(board.icon_name);
  const [background_url, setBackground] = useState(board.background_url);

  const dispatch = useDispatch();

  const initialValues = {
    name: board.name,
    icon_name: board.icon_name,
    background_url: board.background_url,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    icon_name: Yup.string(),
    background_url: Yup.string(),
  });

  const handleSubmit = (data) => {
    const id = board._id;
    if (board.name === data.name) {
      const editedBoard = {
        icon_name,
        background_url,
      };
      dispatch(editBoard({ _id: id, boardsData: editedBoard }));
      closeModal();
    } else {
      const editedBoard = {
        name: data.name,
        icon_name,
        background_url,
      };
      dispatch(editBoard({ _id: id, boardsData: editedBoard }));
      closeModal();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <Field
          name="name"
          type="text"
          placeholder="Title"
          className={css.input}
        />

        <p className={css.icons_p}>Icons</p>
        {icons.map((iconOption) => (
          <label key={iconOption.id}>
            <input
              type="radio"
              name="icon_name"
              value={iconOption.id}
              checked={iconOption === iconOption.id}
              onChange={() => {
                setIcon(iconOption.id);
              }}
            />
            <Icon
              size={26}
              id={iconOption.id}
              className={`${css.icon} ${
                icon_name === iconOption.id ? css.selected : ""
              }`}
            />
          </label>
        ))}
        <p className={css.icons_p}>Background</p>
        <div className={css.backgrounds_div}>
          {backgrounds.map((backgroundOption) => (
            <label key={backgroundOption.id} className={css.label}>
              <input
                type="radio"
                value={backgroundOption.class}
                checked={background_url === backgroundOption.id}
                onChange={(e) => {
                  setBackground(e.target.value);
                }}
              />
              <BackgroundImage
                url={backgroundOption.id}
                size={28}
                className={`${css.background} ${
                  background_url === backgroundOption.id ? css.selected : ""
                }`}
              />
            </label>
          ))}
        </div>

        <button type="submit" className={css.btn_create}>
          <div className={css.icon_wrapper}>
            <Icon size={14} id="plus" className={css.plus} />
          </div>
          Edit
        </button>
      </Form>
    </Formik>
  );
};

export default EditBoardForm;
