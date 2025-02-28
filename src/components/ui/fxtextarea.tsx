import React from 'react'
import { ROUNDED_VARIANTS } from './constant'
import { SizeType } from './type'

interface FxTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string,
    resize?: boolean
    radius?: keyof typeof ROUNDED_VARIANTS
    size?: keyof typeof textAreaSizes,
    variant?: keyof typeof textAreaVariants,
}

type TextAreaVariantType = "primary" | "secondary"

const textAreaSizes: { [key in SizeType]: string } = {
    sm: "p-1 pl-2 pr-2 h-[100px]",
    md: "p-2 pl-3 pr-3 h-[200px]",
    lg: "p-3 pl-4 pr-4 h-[300px]",
    xl: "p-4 pl-5 pr-5 h-[400px]",
}

const textAreaVariants: { [key in TextAreaVariantType]: string } = {
    primary: "border fx-border-color fx-secondary-bg focus:fx-input-outline",
    secondary: "border fx-border-color bg-transparent",
}

export function FxTextArea({
    className,
    resize,
    radius,
    size,
    variant,
    ...props
}: FxTextAreaProps) {
    const textAreaSize = size ? textAreaSizes[size] : ""
    const textAreaVariant = variant ? textAreaVariants[variant] : "secondary"
    const radiusVariant = radius ? ROUNDED_VARIANTS[radius] : ""
    return <textarea name="description" id="fxTextArea" className={`${textAreaVariant} ${resize ? "" : "resize-none"} ${textAreaSize} ${radiusVariant} ${className}`} {...props} ></textarea>
}


