import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import SelectDate from "../SelectDate/SelectDate";
import { addCardThunk } from "../../redux/cards/operations";
import css from "./AddCardForm.module.css";
import { Icon } from "../../icons/Icon";
import CustomRadioBtn from "../CustomRadioBtn/CustomRadioBtn";

const AddCardForm = ({ closeModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const initialValues = {
    title: "",
    description: "",
    priority: "Without",
    deadline: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required field"),
    description: Yup.string().required("Description is required field"),
    priority: Yup.string()
      .oneOf(["High", "Medium", "Low", "Without"])
      .required(),
    deadline: Yup.date().nullable(),
  });

  function handleSubmit(data, option) {
    // console.log(data);
    const query = {
      ...data,
      deadline: startDate
        .toLocaleDateString("uk-UA", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .split(".")
        .join("/"),
      board_id: "66924e509e77e436cbb8a1fc",
      column_id: "66924e7b9e77e436cbb8a1ff",
    };
    console.log(query);
    if (query.deadline === null) return;
    dispatch(addCardThunk(query));
    option.resetForm();
    closeModal();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <Field
          name="title"
          type="text"
          placeholder="Title"
          className={css.input}
        />
        <Field
          as="textarea"
          name="description"
          placeholder="Description"
          className={css.textarea}
        />
        <label className={css.label}>
          Label color
          <div role="group" className={css.label_box}>
            {/* <Field
              name="priority"
              type="radio"
              value="Low"
              className={css.low}
            />
            <Field
              name="priority"
              type="radio"
              value="Medium"
              className={css.medium}
            />
            <Field
              name="priority"
              type="radio"
              value="High"
              className={css.high}
            />
            <Field
              name="priority"
              type="radio"
              value="Without"
              className={css.without}
            /> */}
            <CustomRadioBtn name="priority" value="Low" />
            <CustomRadioBtn name="priority" value="Medium" />
            <CustomRadioBtn name="priority" value="High" />
            <CustomRadioBtn name="priority" value="Without" />
          </div>
        </label>
        <div className={css.deadline_box}>
          <p className={css.deadline_text}>Deadline</p>
          <SelectDate startDate={startDate} setStartDate={setStartDate} />
        </div>
        <button type="submit" className={css.add_btn}>
          <div className={css.icon_wrapper}>
            <Icon size={14} id="plus" className={css.icon} />
          </div>
          Add
        </button>
      </Form>
    </Formik>
  );
};

export default AddCardForm;
