import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const PageIcon: React.FC<SvgType> = ({
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
      d="M8 17H16"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M8 13H12"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M20 20V9L13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20Z"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinejoin="round"
    ></path>
    <path
      d="M13 2V7C13 8.10457 13.8954 9 15 9H20"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinejoin="round"
    ></path>
  </svg>
);
