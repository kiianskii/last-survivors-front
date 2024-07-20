import Select from "react-select";
import { getSelectOptions, styleSelect } from "../../helpers/selectHelpers";
import { useDispatch } from "react-redux";

function CustomSelect({
    name,
    values,
    placeholder,
    currentTheme,
    dispatchFunction = () => {},
}) {
    const dispatch = useDispatch();
    return (
        <Select
            name={name}
            id={name}
            placeholder={placeholder}
            closeMenuOnSelect={true}
            options={getSelectOptions(values)}
            styles={styleSelect(currentTheme)}
            components={{
                DropdownIndicator: () => {},
            }}
            onChange={(selected) => {
                dispatch(dispatchFunction({ theme: selected.value }));
            }}
        />
    );
}

export default CustomSelect;
