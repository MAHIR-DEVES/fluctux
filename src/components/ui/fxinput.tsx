import { SizeType } from "@/components/ui/type";
import React from "react";
import { ROUNDED_VARIANTS } from "./constant";

interface FxInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
  variant?: keyof typeof inputVariants;
  radius?: keyof typeof ROUNDED_VARIANTS
  size?: keyof typeof inputSizes;
  label?: string;
}

type InputVariantType = "primary" | "secondary" | "outline";

const inputVariants: { [key in InputVariantType]: string } = {
  primary: "border fx-border-color fx-secondary-bg focus:fx-input-outline",
  secondary: "border fx-border-color bg-transparent",
  outline: "bg-transparent border fx-border-color w-full focus:outline-fxInput"
};

const inputSizes: { [key in SizeType]: string } = {
  sm: "p-1 pl-2 pr-2",
  md: "p-2 pl-3 pr-3",
  lg: "p-3 pl-4 pr-4",
  xl: "p-4 pl-5 pr-5",
};

export function FxInput({
  className,
  variant,
  radius,
  size,
  label = "Label",
  ...props
}: FxInputProps) {
  
  const inputVariant = variant ? inputVariants[variant] : "";
  const inputSize = size ? inputSizes[size] : "";
  const roundedVariant = radius ? ROUNDED_VARIANTS[radius] : ""

  return (
    variant === "outline" ? <div className="w-full relative group">
      <input className={`peer ${inputVariant} ${inputSize} ${roundedVariant} ${className} `} {...props} id={`${label.replace(" ", "-")}`} />
      <label htmlFor={`${label.replace(" ", "-")}`} className="absolute translate-y-[-50%] fx-label-color peer-focus:text-[var(--primary-color)] left-[15px] fx-primary-bg py-0 px-1 text-[14px] font-medium ">{label}</label>
    </div> : <input className={`${inputVariant} ${inputSize} ${roundedVariant} ${className}`} {...props} />
  );
}
