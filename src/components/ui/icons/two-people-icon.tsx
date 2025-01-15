import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const TwoPeopleIcon: React.FC<SvgType> = ({
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
      d="M9.875 14H8.125C4.74226 14 2 16.9101 2 20.5H16C16 16.9101 13.2577 14 9.875 14Z"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M19 20.5H22C22 17.1341 19.5892 14.3323 16.5 14"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <circle
      cx="9"
      cy="7"
      r="3.5"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></circle>
    <path
      d="M15 10.5C16.933 10.5 18.5 8.933 18.5 7C18.5 5.067 16.933 3.5 15 3.5"
      stroke="#b1b1b1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
