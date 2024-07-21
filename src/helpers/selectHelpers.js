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

export function range({
    to,
    from,
    step,
    length = Math.ceil((to - from + 1) / step),
}) {
    return Array.from({ length }, (_, i) => from + i * step);
}

export const animatedComponents = makeAnimated();

export function styleSelect(theme) {
    return {
        option: (provided) => {
            return {
                ...provided,
                border: "none",
                textAlign: "left",

                color: themeColors[theme].color1,
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "-0.28px",

                backgroundColor: themeColors[theme].background2,
                transition:
                    "background-color .5s ease-in-out, color .5s ease-in-out",
                cursor: "pointer",
                "&:hover, &:focus": {
                    color: themeColors[theme].color2,
                },
            };
        },
        control: (styles) => ({
            ...styles,
            width: "100px",

            color: themeColors[theme].color1,
            border: "none",
            backgroundColor: themeColors[theme].background2,
            transition:
                "background-color .5s ease-in-out, color .5s ease-in-out",
            cursor: "pointer",
        }),

        singleValue: (provided) => {
            return {
                ...provided,
                right: 5,
                color: themeColors[theme].color1,
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

        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                opacity: ".7",

                color: themeColors[theme].color1,
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "-0.28px",
            };
        },
    };
}
