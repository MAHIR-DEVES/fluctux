import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const GlobeIcon: React.FC<SvgType> = ({
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
      d="M12.0018 22C11.0388 21.2864 11.1925 20.4555 11.6757 19.6247C12.4184 18.3474 12.4184 18.3474 12.4184 16.6444C12.4184 14.9414 13.4304 14.1429 17.0018 14.8571C18.6066 15.1781 19.5 13 22 14M14 2C14.5106 2.94019 14.1834 4.23551 13.1045 4.66298C11.3447 5.36029 12.6047 6.64343 11.1053 7.4356C10.1057 7.96372 8.60622 7.83151 7.10678 6.24716C6.31699 5.41263 6 5 5 5"
      stroke="#b1b1b1"
      strokeWidth="1.5"
    ></path>
    <circle cx="12" cy="12" r="10" stroke="#b1b1b1" strokeWidth="1.5"></circle>
  </svg>
);
