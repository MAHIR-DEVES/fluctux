"use client"
import { SizeType } from "@/types/element-default-size-types";
import React from "react";

interface FxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: keyof typeof buttonVariants; // Optional `variant` prop for predefined styles
  size?: keyof typeof buttonSizes;
}

type ButtonVariantType = "primary" | "secondary" | "glossy" | "glassy";

const buttonVariants: { [key in ButtonVariantType]: string } = {
  primary:
    "border fx-rounded fx-border-color fx-primary-green-bg hover:bg-[#59d69a] active:scale-[0.95]",
  secondary:
    "border fx-rounded fx-border-color fx-secondary-bg fx-hover-primary-bg active:scale-[0.95]",
  glossy:
    "border fx-rounded bg-gradient-to-b from-[#6aeeae6e] to-[#6aeeae22] border-[#6aeeaeca] hover:bg-[#6aeeae11] active:scale-[0.95]",
  glassy:
    "border fx-rounded bg-[#6aeeae3b] border-[#6aeeaeae] hover:bg-[#6aeeae2f]  active:scale-[0.95]",
};

const buttonSizes: { [key in SizeType]: string } = {
  sm: "p-1 pl-3 pr-3",
  md: "p-2 pl-4 pr-4",
  lg: "p-3 pl-5 pr-5",
  xl: "p-3 pl-10 pr-10",
};

export default function FxButton({
  className,
  children,
  variant,
  size,
  ...props
}: FxButtonProps) {
  const buttonVariant = variant ? buttonVariants[variant] : "";
  const buttonSize = size ? buttonSizes[size] : "";
  return (
    <button
      className={`${buttonVariant} ${buttonSize} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
