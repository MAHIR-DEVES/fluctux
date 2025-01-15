import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const UploadIcon: React.FC<SvgType> = ({
      width = SvgSizeInSQR.PRIMARY,
      height = SvgSizeInSQR.PRIMARY,
      className,
      ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    color="#b1b1b1"
    {...props}
  >
    <path
      d="M9.5 7.5L12 5L14.5 7.5M12 15V5.60878"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5 19H19"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
