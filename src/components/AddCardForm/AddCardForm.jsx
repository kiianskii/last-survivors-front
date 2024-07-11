import { Formik, Field, Form } from "formik";
// import { useDispatch } from "react-redux";
import * as Yup from "yup";
import SelectDate from "../SelectDate/SelectDate";

const AddCardForm = ({ closeModal }) => {
  //   const dispatch = useDispatch();
  const initialValues = {
    title: "",
    description: "",
    priority: "Without",
    deadline: "",
  };

  const validationSchema = Yup.object.shape({
    title: Yup.string().required("Title is required field"),
    description: Yup.string().required("Description is required field"),
    priority: Yup.oneOf(["High", "Medium", "Low", "Without"]).required(),
    deadline: Yup.date().nullable("Deadline is required field"),
  });

  function handleSubmit(data, option) {
    console.log(data);
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
          <SelectDate />
        </div>
      </Form>
    </Formik>
  );
};

export default AddCardForm;
