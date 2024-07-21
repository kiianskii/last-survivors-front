import { Formik, Form } from "formik";
import CustomRadioBtn from "../../components/CustomRadioBtn/CustomRadioBtn";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchColumnsThunk,
  filterColumnThunk,
} from "../../redux/boardByID/operations";
import css from "./FilterForm.module.css";

const FilterForm = ({ closeModal }) => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const initialValues = {
    priority: "Without",
  };

  const validationSchema = Yup.object().shape({
    priority: Yup.string()
      .oneOf(["High", "Medium", "Low", "Without"])
      .required(),
  });

  function handleSubmit(data) {
    const query = {
      priority: data,
      board_id: boardId,
    };
    if (data) {
      dispatch(
        filterColumnThunk({
          board_id: query.board_id,
          credentials: { priority: query.priority },
        })
      );
      closeModal();
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div role="group" className={css.wrapper}>
          <div className={css.box}>
            <p className={css.text}>Label color</p>
            <button
              className={css.btn}
              onClick={() => {
                dispatch(fetchColumnsThunk(boardId));
              }}
            >
              show all
            </button>
          </div>
          <div className={css.label_box}>
            <label
              onClick={(e) => {
                handleSubmit(e.target.value);
              }}
              className={css.label}
            >
              <CustomRadioBtn
                name="priority"
                value="Without"
                className={css.input}
              />
              Without priority
            </label>
            <label
              onClick={(e) => {
                handleSubmit(e.target.value);
              }}
              className={css.label}
            >
              <CustomRadioBtn
                name="priority"
                value="Low"
                className={css.input}
              />
              Low
            </label>
            <label
              onClick={(e) => {
                handleSubmit(e.target.value);
              }}
              className={css.label}
            >
              <CustomRadioBtn
                name="priority"
                value="Medium"
                className={css.input}
              />
              Medium
            </label>
            <label
              onClick={(e) => {
                handleSubmit(e.target.value);
              }}
              className={css.label}
            >
              <CustomRadioBtn
                name="priority"
                value="High"
                className={css.input}
              />
              High
            </label>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default FilterForm;
