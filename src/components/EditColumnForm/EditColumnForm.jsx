import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { editColumnThunk } from "../../redux/boardByID/operations";
import css from "./EditColumnForm.module.css";
import { Field, Form, Formik } from "formik";
import { Icon } from "../../icons/Icon";

function EditColumnForm({ closeModal, column }) {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const initialValues = {
    title: column.title,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required field"),
  });

  const handleSubmit = (data, option) => {
    const credentials = {
      ...data,
      board_id: boardId,
    };

    dispatch(editColumnThunk({ column_id: column._id, credentials }));
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
            <p className={css.add_title}>Edit</p>
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default EditColumnForm;
