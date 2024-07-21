import makeAnimated from "react-select/animated";
import { themeColors } from "./themeHelper";

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getSelectOptions(options) {
    const newOptions = [];
    options.map((option) => {
        newOptions.push({
            value: option,
            label: capitalizeFirstLetter(option),
        });
    });
    return newOptions;
}

export const animatedComponents = makeAnimated();

export function styleSelect(theme) {
    return {
        option: (provided, state) => {
            return {
                ...provided,
                border: "none",
                textAlign: "left",

                color: state.isSelected
                    ? themeColors[theme].background1
                    : themeColors[theme].color1,
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "-0.28px",

                backgroundColor: state.isSelected
                    ? themeColors[theme].color2
                    : themeColors[theme].background2,
                transition:
                    "color .5s ease-in-out, background-color .5s ease-in-out",
                cursor: "pointer",
                "&:hover, &:focus": {
                    color: state.isSelected
                        ? themeColors[theme].background1
                        : themeColors[theme].color2,
                    backgroundColor: state.isSelected
                        ? themeColors[theme].color2
                        : themeColors[theme].hoverColor,
                },
                "&:disabled": {
                    color: themeColors[theme].background1,
                    backgroundColor: themeColors[theme].color2,
                },
            };
        },
        control: (styles) => ({
            ...styles,
            width: "100px",

            color: themeColors[theme].color1,
            backgroundColor: "transparent",
            transition: "background-color .5s ease-in-out",
            cursor: "pointer",
            border: "none",
            "&:hover, &:focus, &:focus-within": {
                backgroundColor: themeColors[theme].hoverColor,
            },
        }),

        singleValue: (provided) => {
            return {
                ...provided,
                right: 5,
                color: "transparent", //themeColors[theme].color1,
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "-0.28px",
            };
        },

        menu: (provided) => {
            return {
                ...provided,
                width: "100px",
                backgroundColor: themeColors[theme].background2,
                borderRadius: "8px",
                marginTop: "2px",
                zIndex: 1000,
            };
        },

        indicatorsContainer: () => {
            return {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            };
        },
        indicatorSeparator: () => ({}),
        indicators: () => {
            return {
                cursor: "pointer",
            };
        },

        input: (provided) => {
            return {
                ...provided,
                margin: "0px",
                color: themeColors[theme].color1,
            };
        },
    };
}
