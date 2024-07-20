import { Field, Form, Formik } from "formik";
import css from "./AddColumnForm.module.css";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addColumnThunk } from "../../redux/boardByID/operations";
import { Icon } from "../../icons/Icon";

function AddColumnForm({ closeModal }) {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const initialValues = {
    title: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required field"),
  });

  const handleSubmit = (data, option) => {
    const credentials = {
      ...data,
      board_id: boardId,
    };
    console.log(credentials);

    dispatch(addColumnThunk(credentials));
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
        <Form className={css.form}>
          <Field className={css.input} name="title" type="text" placeholder="Title" />
          
          <button className={css.button} type="submit">
            <div className={css.row}> 
          <Icon size={14} id="plus" className={css.icon} />
            </div>
            <p className={css.add_title}>Add</p>
            </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddColumnForm;
