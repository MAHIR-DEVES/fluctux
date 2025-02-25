import { SizeType } from "../type";

export type ButtonVariant =
    | "primary"
    | "secondary"


export interface ButtonStylingType {
    [key: string]: {
        default: string,
        hover: string,
        disabled: string
    }
}

export const buttonSizes: { [key in SizeType]: string } = {
  sm: "py-1 px-3",
  md: "py-2 px-4",
  lg: "py-3 px-5",
  xl: "py-3 px-10",
};

export const buttonStyling: ButtonStylingType = {
    primary: {
        default: "fx-primary-purple-bg cursor-pointer border-none",
        hover: "fx-hover-primary-purple-bg",
        disabled: "fx-sec-label-color cursor-not-allowed !bg-[var(--button-primary-disabled)] border fx-border-color"
    },
    secondary: {
        default: "border fx-border-color fx-secondary-bg  cursor-pointer ",
        hover: "fx-secondary-hover-bg",
        disabled: "fx-sec-label-color cursor-not-allowed fx-secondary-bg border fx-border-color"
    }
}

export const getButtonStyling = (variant?: ButtonVariant, size?: SizeType, disabled: boolean = false) => {
    const tempVariant = variant && buttonStyling[variant] || buttonStyling["primary"]
    const tempSize = size && buttonSizes[size] || ""
    const tempStyledButton = `${tempVariant.default} ${disabled ? tempVariant.disabled : tempVariant.hover} ${tempSize}`
    return tempStyledButton
}