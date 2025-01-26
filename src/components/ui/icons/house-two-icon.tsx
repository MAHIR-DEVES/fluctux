import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const HouseTwoIcon: React.FC<SvgType> = ({
    width = SvgSizeInSQR.PRIMARY,
    height = SvgSizeInSQR.PRIMARY,
    className,
    ...props
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width}
    height={height} viewBox="0 0 24 24" fill="none" className={className}  xmlnsXlink="http://www.w3.org/1999/xlink" role="img" color="#ffffff"  {...props}>
    <path d="M13 2L2 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12 8L22 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M18 10V8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M6.5 10.9979L8.5 11M6.5 14.9979H8.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M15.5 14H17.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M16.5 22V18.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M21 11.9442V22L3 21.9943V6.73331M12 22V2.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
)