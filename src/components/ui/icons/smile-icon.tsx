import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const SmileIcon: React.FC<SvgType> = ({
    width = SvgSizeInSQR.PRIMARY,
    height = SvgSizeInSQR.PRIMARY,
    className,
    ...props

}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width}
        height={height} viewBox="0 0 24 24" fill="none" className={className} xmlnsXlink="http://www.w3.org/1999/xlink" role="img" color="#b1b1b1"  {...props}>
        <circle cx="12" cy="12" r="10" stroke="#b1b1b1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
        <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="#b1b1b1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M8.00897 9L8 9M16 9L15.991 9" stroke="#b1b1b1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
)