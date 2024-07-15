import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import SelectDate from "../SelectDate/SelectDate";
import css from "./EditCardForm.module.css";
import { Icon } from "../../icons/Icon";
import CustomRadioBtn from "../CustomRadioBtn/CustomRadioBtn";
import { editCardThunk } from "../../redux/cards/operations";

const EditCardForm = ({ card, closeModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const initialValues = {
    title: card.title,
    description: card.description,
    priority: card.priority,
    deadline: card.deadline,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string(),
    description: Yup.string(),
    priority: Yup.string().oneOf(["High", "Medium", "Low", "Without"]),
    deadline: Yup.date().nullable(),
  });

  function handleSubmit(data) {
    console.log(data);
    // const query = {
    //   ...data,
    //   deadline: startDate
    //     .toLocaleDateString("uk-UA", {
    //       day: "2-digit",
    //       month: "2-digit",
    //       year: "numeric",
    //     })
    //     .split(".")
    //     .join("/"),
    //   board_id: "66924e509e77e436cbb8a1fc",
    //   column_id: "66924e7b9e77e436cbb8a1ff",
    // };
    // console.log(query);
    // if (query.deadline === null) return;
    // // dispatch(addCardThunk(query));
    // // closeModal();

    const id = card.id;
    const editedCard = {
      title: data.title,
      description: data.description,
      priority: data.priority,
      deadline: data.deadline,
    };
    dispatch(editCardThunk({ _id: id, cardsData: editedCard }));
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
          Edit
        </button>
      </Form>
    </Formik>
  );
};

export default EditCardForm;
