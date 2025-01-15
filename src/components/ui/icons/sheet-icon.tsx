import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const SheetIcon: React.FC<SvgType> = ({
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
      d="M12 12V15M12 15V18M12 15H7.5M12 15H16.5M7.5 18H16.5V12H7.5V18Z"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinejoin="round"
    ></path>
    <path
      d="M15 2.5V6C15 6.55228 15.4477 7 16 7H19.5"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M4 20V4C4 2.89543 4.89543 2 6 2H14.1716C14.702 2 15.2107 2.21071 15.5858 2.58579L19.4142 6.41421C19.7893 6.78929 20 7.29799 20 7.82843V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20Z"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinejoin="round"
    ></path>
  </svg>
);
