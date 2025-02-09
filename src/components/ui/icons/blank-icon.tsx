import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const BlankIcon: React.FC<SvgType> = ({ 
        width = SvgSizeInSQR.PRIMARY,
        height = SvgSizeInSQR.PRIMARY,
        className,
        color='#B1B1B1',
        ...props
 }) => (
    <svg fill={color} width={width}
    height={height} viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" {...props}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2.293,7.707a1,1,0,0,1,0-1.414l4-4A1,1,0,0,1,7.707,3.707l-4,4a1,1,0,0,1-1.414,0Zm17.5,8.086-4,4a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0-1.414-1.414Zm1.914-6.5a1,1,0,0,0-1.414,0l-11,11a1,1,0,1,0,1.414,1.414l11-11A1,1,0,0,0,21.707,9.293ZM3,15a1,1,0,0,0,.707-.293l11-11a1,1,0,1,0-1.414-1.414l-11,11A1,1,0,0,0,3,15Zm0,7a1,1,0,0,0,.707-.293l18-18a1,1,0,1,0-1.414-1.414l-18,18A1,1,0,0,0,3,22Z"></path></g></svg>
)