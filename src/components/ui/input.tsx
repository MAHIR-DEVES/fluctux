import { SizeType } from "@/types/element-default-size-types";
import React from "react";

interface FxInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
  variant?: keyof typeof inputVariants;
  size?: keyof typeof inputSizes;
}

type InputVariantType = "primary" | "secondary";

const inputVariants: { [key in InputVariantType]: string } = {
  primary: "border border-[var(--primary-border-color)] bg-[var(--primary-light-bg-alter)] rounded-[var(--primary-radius)] focus:input-outline",
  secondary: "border border-[var(--primary-border-color)] bg-transparent rounded-[var(--primary-radius)]",
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
  size,
  ...props
}: FxInputProps) {
  const inputVariant = variant ? inputVariants[variant] : "";
  const inputSize = size ? inputSizes[size] : "";
  return (
    <input className={`${inputVariant} ${inputSize} ${className}`} {...props} />
  );
}
