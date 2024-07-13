import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import SelectDate from "../SelectDate/SelectDate";
import { addCardThunk } from "../../redux/cards/operations";

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
      <Form>
        <Field name="title" type="text" placeholder="Title" />
        <Field as="textarea" name="description" placeholder="Description" />
        <label>
          Label color
          <Field name="priority" type="radio" value="Low" />
          <Field name="priority" type="radio" value="Medium" />
          <Field name="priority" type="radio" value="High" />
          <Field name="priority" type="radio" value="Without" />
        </label>
        <div>
          <p>Deadline</p>
          <SelectDate startDate={startDate} setStartDate={setStartDate} />
        </div>
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default AddCardForm;
