import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const SolidLineIcon: React.FC<SvgType> = ({
    width = SvgSizeInSQR.PRIMARY,
    height = SvgSizeInSQR.PRIMARY,
    className,
    ...props
}) => (
    <svg width={width}
        height={height} viewBox="0 0 24.00 24.00" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" {...props}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Line_Xl"> <path id="Vector" d="M12 21V3" stroke="#B1B1B1" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
)