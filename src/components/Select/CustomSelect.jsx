import Select from "react-select";
import { getSelectOptions, styleSelect } from "../../helpers/selectHelpers";
import { useDispatch, useSelector } from "react-redux";
import { selectId } from "../../redux/auth/authSlice";

function CustomSelect({
    name,
    values,
    currentTheme,
    dispatchFunction = () => {},
}) {
    const userId = useSelector(selectId);
    const dispatch = useDispatch();
    return (
        <Select
            name={name}
            id={name}
            defaultValue={getSelectOptions(values).find(
                (elem) => elem.value === currentTheme
            )}
            closeMenuOnSelect={true}
            options={getSelectOptions(values)}
            styles={styleSelect(currentTheme)}
            isSearchable={false}
            components={{
                DropdownIndicator: () => {},
            }}
            onChange={(selected) => {
                if (currentTheme !== selected.value) {
                    console.log(selected);
                    dispatch(
                        dispatchFunction({
                            id: userId,
                            credentials: { theme: selected.value },
                        })
                    );
                }
            }}
        />
    );
}

export default CustomSelect;
