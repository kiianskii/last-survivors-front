import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import css from "./SelectDate.module.css";

const SelectDate = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd/MM/yyyy"
    />
  );
};

export default SelectDate;
