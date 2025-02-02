import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const RightArrowIcon: React.FC<SvgType> = ({
    width = SvgSizeInSQR.PRIMARY,
    height = SvgSizeInSQR.PRIMARY,
    className,
    ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width}
        height={height}
        className={className} viewBox="0 0 24 24" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" color="#b1b1b1" {...props}>
        <path d="M9.00005 6L15 12L9 18" stroke="#b1b1b1" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
)