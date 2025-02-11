"use client"
import { SizeType } from "@/components/ui/type";
import React from "react";
import { ROUNDED_VARIANTS } from "./constant";

interface FxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: keyof typeof buttonVariants; // Optional `variant` prop for predefined styles
  radius?: keyof typeof ROUNDED_VARIANTS;
  size?: keyof typeof buttonSizes;
}

type ButtonVariantType = "primary" | "secondary"

const buttonVariants: { [key in ButtonVariantType]: string } = {
  primary:
    "border border-none fx-primary-purple-bg fx-hover-primary-purple-bg",
  secondary:
    "border fx-border-color fx-secondary-bg fx-secondary-hover-bg"
};

const buttonSizes: { [key in SizeType]: string } = {
  sm: "p-1 pl-3 pr-3",
  md: "p-2 pl-4 pr-4",
  lg: "p-3 pl-5 pr-5",
  xl: "p-3 pl-10 pr-10",
};

export function FxButton({
  className,
  children,
  variant,
  size,
  radius,
  ...props
}: FxButtonProps) {
  const buttonVariant = variant ? buttonVariants[variant] : "";
  const buttonSize = size ? buttonSizes[size] : "";
  const roundedVariant = radius ? ROUNDED_VARIANTS[radius]: ""
  return (
    <button
      className={`${buttonVariant} ${buttonSize} ${roundedVariant} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
}
