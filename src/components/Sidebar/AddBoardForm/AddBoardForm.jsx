import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import CreateBoard from "../CreateBoard/CreateBoard.jsx";
import * as Yup from "yup";
import css from "./AddBoardForm.module.css";
import { icons } from "../hooks/iconsImages.js";
import { Icon } from "../../../icons/Icon.jsx";
import { useState } from "react";

const backgrounds = ["bg1", "bg2", "bg3", "bg4", "bg5"];
const AddBoardForm = ({ closeModal, initialState = {} }) => {
  const [icon_name, setIcon] = useState(initialState.icon_name || icons[0]);
  const [background_url, setBackground] = useState(
    initialState.background_url || backgrounds
  );

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    icon_name: "" || icons[0],
    background_url: "" || backgrounds[0],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Title is required field"),
    icon_name: Yup.string().required("Icon is required"),
    background_url: Yup.string().required("Background is required"),
  });
  const handleSubmit = (data, option) => {
    const query = {
      ...data,
      board_id: "",
    };
    console.log(query);
    option.resetForm();
    closeModal();
    dispatch(CreateBoard(query));
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
          <label key={iconOption.id} className={css.radioLabel}>
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
              size={24}
              id={iconOption.id}
              className={`${css.icon} ${
                icon_name === iconOption.id ? css.selected : ""
              }`}
            />
          </label>
        ))}
        <p>Backgrounds</p>
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
        <button type="submit">Create</button>
      </Form>
    </Formik>
  );
};
export default AddBoardForm;
