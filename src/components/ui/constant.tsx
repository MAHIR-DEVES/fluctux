import { RadiusType } from "./type";

export const ROUNDED_VARIANTS: { [key in RadiusType]: string } = {
  primary: "rounded-[8px]",
  tablet: "rounded-[50px]",
  circle: "rounded-[50%]",
  tiny: "rounded-[5px]"
}
