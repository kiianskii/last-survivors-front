import { Field, Form, Formik } from "formik";
import css from "./AddColumnForm.module.css";
import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { addColumnThunk } from "../../redux/boardByID/operations";

function AddColumnForm({ closeModal }) {
  // const dispatch = useDispatch();

  const initialValues = {
    title: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required field"),
  });

  const handleSubmit = (data, option) => {
    // dispatch(addColumnThunk());
    option.resetForm();
    closeModal();
  };
  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="title" type="text" placeholder="Title" />

          <button type="submit">Add</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddColumnForm;
