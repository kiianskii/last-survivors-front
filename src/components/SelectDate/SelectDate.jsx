import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./SelectDate.module.css";
import { Icon } from "../../icons/Icon";

const SelectDate = ({ startDate, setStartDate }) => {
    const today = new Date();
    return (
        <label>
            <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="eeee MMMM, d"
                className={css.calendar}
                icon={<Icon size={18} id="arrow-down" className={css.icon} />}
                minDate={today}
                disableDays
                views={["year", "month", "day"]}
            />
        </label>
    );
};

export default SelectDate;
