import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const IssueIcon: React.FC<SvgType> = ({
  width = SvgSizeInSQR.PRIMARY,
  height = SvgSizeInSQR.PRIMARY,
  className,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    version="1.1"
    fill="#b1b1b1"
    {...props}
  >
    <title>Gala icon set</title>
    <g>
      <circle
        style={{
          fill: "none",
          stroke: "#b1b1b1",
          strokeWidth: 16,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        cx="128"
        cy="128"
        r="40"
      ></circle>
      <circle
        style={{
          fill: "none",
          stroke: "#b1b1b1",
          strokeWidth: 16,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        cx="128"
        cy="128"
        r="112"
      ></circle>
    </g>
  </svg>
);
