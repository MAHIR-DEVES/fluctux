import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const AddIcon: React.FC<SvgType> = ({
    width = SvgSizeInSQR.PRIMARY,
    height = SvgSizeInSQR.PRIMARY,
    className,
    ...props
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width}
        height={height} viewBox="0 0 24 24" fill="none" className={className} xmlnsXlink="http://www.w3.org/1999/xlink" color="#ffffff" {...props}>
        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 8V16M16 12H8" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
)