import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const ArrowRightStrokeIcon: React.FC<SvgType> = ({
  width = SvgSizeInSQR.PRIMARY,
    height = SvgSizeInSQR.PRIMARY,
    className,
    color = "#b1b1b1",
    ...props
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" className={className} xmlnsXlink="http://www.w3.org/1999/xlink" role="img" color={color} {...props}>
        <path d="M15.0001 17L20 12L15 7" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M4 12H20" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
)