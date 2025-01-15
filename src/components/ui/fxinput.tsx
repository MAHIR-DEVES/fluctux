import {  SizeType } from "@/components/ui/type";
import React from "react";
import { ROUNDED_VARIANTS } from "./constant";

interface FxInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
  variant?: keyof typeof inputVariants;
  radius?: keyof typeof ROUNDED_VARIANTS
  size?: keyof typeof inputSizes;
}

type InputVariantType = "primary" | "secondary";

const inputVariants: { [key in InputVariantType]: string } = {
  primary: "border fx-border-color fx-input-bg focus:fx-input-outline",
  secondary: "border fx-border-color bg-transparent",
};


const inputSizes: { [key in SizeType]: string } = {
    sm: "p-1 pl-2 pr-2",
    md: "p-2 pl-3 pr-3",
    lg: "p-3 pl-4 pr-4",
    xl: "p-4 pl-5 pr-5",
};

export default function FxInput({
  className,
  variant,
  radius,
  size,
  ...props
}: FxInputProps) {
  const inputVariant = variant ? inputVariants[variant] : "";
  const inputSize = size ? inputSizes[size] : "";
  const roundedVariant = radius ? ROUNDED_VARIANTS[radius] : ""
  return (
    <input className={`${inputVariant} ${inputSize} ${roundedVariant} ${className}`} {...props} />
  );
}
