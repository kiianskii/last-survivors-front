import css from "./HelpForm.module.css";
import needHelp from "../../../img/mobile/plant.png";
import sprite from "../../../icons/sprite.svg";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { needHelpThunk } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";

const HelpForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required field"),
    message: Yup.string()
      .min(5, "Comment must be at least 5 characters")
      .max(200, "Comment must be less than 200 characters")
      .required("Comment is required field"),
  });

  const initialValues = {
    email: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, message } = values;
    const credentials = { email, message };

    dispatch(needHelpThunk(credentials));
    resetForm();
    closeModal();
  };

  return (
    <div className={css.help_wrapper}>
      <img className={css.kaktus} src={needHelp} alt="plant image" />
      <p className={css.help_text}>
        If you need help with <span className={css.span_text}>TaskPro</span>,
        check out our support resources or reach out to our customer support
        team.
      </p>
      <button className={css.help_link} onClick={openModal}>
        <svg className={css.help_icon} width="20px" height="20px">
          <use href={sprite + "#icon-help"}></use>
        </svg>
        <span className={css.need_text}>Need help?</span>
      </button>

      {isOpen && (
        <Modal
          title="Need help"
          closeModal={closeModal}
          classname={css.help_form}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={css.modal_help}>
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
              <Field
                className={css.help_email}
                name="email"
                type="email"
                placeholder="Email address"
              />
              <ErrorMessage
                name="message"
                component="div"
                className={css.error}
              />

              <Field
                className={css.help_comment}
                component="textarea"
                name="message"
                type="text"
                placeholder="Comment"
              />

              <button className={css.send_button} type="submit">
                Send
              </button>
            </Form>
          </Formik>
        </Modal>
      )}
    </div>
  );
};

export default HelpForm;
