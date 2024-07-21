import Select from "react-select";
import { getSelectOptions, styleSelect } from "../../helpers/selectHelpers";
import { useDispatch, useSelector } from "react-redux";
import { selectId } from "../../redux/auth/authSlice";

function CustomSelect({
    name,
    values,
    placeholder,
    currentTheme,
    dispatchFunction = () => {},
}) {
    const userId = useSelector(selectId);
    const dispatch = useDispatch();
    return (
        <Select
            name={name}
            id={name}
            defaultValue={currentTheme}
            placeholder={placeholder}
            closeMenuOnSelect={true}
            options={getSelectOptions(values)}
            styles={styleSelect(currentTheme)}
            components={{
                DropdownIndicator: () => {},
            }}
            onChange={(selected) => {
                if (currentTheme !== selected.value)
                    dispatch(
                        dispatchFunction({
                            id: userId,
                            credentials: { theme: selected.value },
                        })
                    );
            }}
        />
    );
}

export default CustomSelect;
