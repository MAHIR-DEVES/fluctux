import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const SadIcon: React.FC<SvgType> = ({
    width = SvgSizeInSQR.PRIMARY,
    height = SvgSizeInSQR.PRIMARY,
    className,
    ...props

}) => (
    <svg xmlns="http://www.w3.org/2000/svg"   width={width}
    height={height} viewBox="0 0 24 24" fill="none" className={className} xmlnsXlink="http://www.w3.org/1999/xlink" role="img" color="#b1b1b1"  {...props}>
<circle cx="12" cy="12" r="10" stroke="#b1b1b1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
<path d="M8 17C8.91212 15.7856 10.3643 15 12 15C13.6357 15 15.0879 15.7856 16 17" stroke="#b1b1b1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M8.00897 9H8M16 9H15.991" stroke="#b1b1b1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
)