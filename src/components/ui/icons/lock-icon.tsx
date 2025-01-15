import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const LockIcon: React.FC<SvgType> = ({
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
      d="M16.5 9V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18 9H6.00019C4.89554 9 4.00008 9.89554 4.00018 11.0002L4.00102 20.0002C4.00112 21.1047 4.89652 22 6.00102 22H18C19.1046 22 20 21.1046 20 20V11C20 9.89543 19.1046 9 18 9Z"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
    ></path>
    <path
      d="M12 15.5H12.009"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
