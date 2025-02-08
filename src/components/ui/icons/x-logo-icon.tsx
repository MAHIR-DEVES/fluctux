import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const XLogoIcon: React.FC<SvgType> = ({
    width = SvgSizeInSQR.PRIMARY,
    height = SvgSizeInSQR.PRIMARY,
    className,
    color = "var(--svg-default-color)",
    ...props
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width}
        height={height} viewBox="0 0 24 24" fill="none" className={className} xmlnsXlink="http://www.w3.org/1999/xlink" role="img" color={color} {...props}>
        <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
)