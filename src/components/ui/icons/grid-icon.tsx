import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const GridIcon: React.FC<SvgType> = ({
    width = SvgSizeInSQR.PRIMARY,
    height = SvgSizeInSQR.PRIMARY,
    className,
    ...props
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width}
        height={height}
        className={className} fill="none" viewBox="0 0 24 24" xmlnsXlink="http://www.w3.org/1999/xlink" color="#b1b1b1"  {...props}>
        <path d="M6.5 2V22" stroke="#b1b1b1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M17.5 2V22" stroke="#b1b1b1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M2 6.5H22" stroke="#b1b1b1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M2 17.5H22" stroke="#b1b1b1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
)