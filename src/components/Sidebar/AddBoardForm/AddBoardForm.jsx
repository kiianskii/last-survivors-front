import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import * as Yup from "yup";
import css from "./AddBoardForm.module.css";
import { icons, backgrounds } from "../hooks/iconsImages.js";
import { Icon } from "../../../icons/Icon.jsx";
import { useState } from "react";
import { createBoard } from "../../../redux/boards/operations.js";
import BackgroundImage from "../hooks/BackgroundImage.jsx";

const AddBoardForm = ({ closeModal }) => {
  const [icon_name, setIcon] = useState(icons[0].id);
  const [background_url, setBackground] = useState(backgrounds[0].class);

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    icon_name: icons[0].id,
    background_url: backgrounds[0].class,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    icon_name: Yup.string(),
    background_url: Yup.string(),
  });
  const handleSubmit = (data, option) => {
    const query = {
      ...data,
      icon_name,
      background_url,
    };
    console.log(query);
    option.resetForm();
    closeModal();
    dispatch(createBoard(query));
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
          Create
        </button>
      </Form>
    </Formik>
  );
};
export default AddBoardForm;
