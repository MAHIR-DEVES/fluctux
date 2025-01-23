import React from "react";
import { SvgSizeInSQR, SvgType } from "../type";

export const ProjectPurpleIcon: React.FC<SvgType> = ({
    width = SvgSizeInSQR.PRIMARY,
    height = SvgSizeInSQR.PRIMARY,
    className,
    ...props
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width}
        height={height} viewBox="0 0 24 24" className={className} fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" color="var(--project-purple)" {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z" fill="var(--project-purple)"></path>
    </svg>
)