import React from "react";
import { SvgSizeInSQR, SvgType } from "./type";

export const NavigationIcon: React.FC<SvgType> = ({
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
    color="#ffffff"
    {...props}
  >
    <path
      d="M19.2694 3.49445L5.01213 7.56796C4.07561 7.83554 4.03532 9.14782 4.95366 9.47235L11.5774 11.8131C11.8622 11.9137 12.0863 12.1378 12.187 12.4226L14.5291 19.0469C14.8537 19.9651 16.1659 19.9247 16.4334 18.9882L20.5057 4.73061C20.7212 3.97628 20.0237 3.27893 19.2694 3.49445Z"
      stroke="#ffffff"
      stroke-width="1.5"
      stroke-linejoin="round"
    ></path>
  </svg>
);
