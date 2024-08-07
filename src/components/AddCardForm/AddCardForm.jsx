import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import SelectDate from "../SelectDate/SelectDate";
import { addCardThunk } from "../../redux/cards/operations";
import css from "./AddCardForm.module.css";
import { Icon } from "../../icons/Icon";
import CustomRadioBtn from "../CustomRadioBtn/CustomRadioBtn";

const AddCardForm = ({ closeModal, column }) => {
  // const date = new Date();
  const [startDate, setStartDate] = useState(new Date());
  // const [checked, setChecked] = useState(false);
  // const [priority, setPriority] = useState("Without");
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
      board_id: column.board_id,
      column_id: column._id,
    };
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
        <ErrorMessage name="title" component="div" className={css.error} />
        <Field
          as="textarea"
          name="description"
          placeholder="Description"
          className={css.textarea}
        />
        <ErrorMessage
          name="description"
          component="div"
          className={css.error}
        />
        <label className={css.label}>
          Label color
          <div role="group" className={css.label_box}>
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
