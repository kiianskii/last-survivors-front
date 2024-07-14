import { useField } from "formik";
import css from "./CustomRadioBtn.module.css";
import clsx from "clsx";

const CustomRadioBtn = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <label>
      <input type="radio" {...field} {...props} className={css.radio_input} />
      <span
        className={clsx(
          css.radio_custom,
          props.value === "High" && css.high,
          props.value === "Medium" && css.medium,
          props.value === "Low" && css.low,
          props.value === "Without" && css.without
        )}
      ></span>
    </label>
  );
};

export default CustomRadioBtn;
