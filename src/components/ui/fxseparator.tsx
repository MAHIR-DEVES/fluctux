import { SizeType } from "@/components/ui/type";
import React from "react";

type OrientationType = "vertical" | "horizontal";

interface FxSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  orientation: keyof typeof sepOrnAttributes;
  color?: string;
  gap?: keyof typeof GapAttributes;
  size?: string
}

const sepOrnAttributes: { [key in OrientationType]: string } = {
  vertical: "w-full rotate-[90deg]",
  horizontal: "w-full",
};

const GapAttributes: { [key in SizeType]: string } = {
  sm: "10px",
  md: "20px",
  lg: "30px",
  xl: "40px",
};

export function FxSeparator({
  orientation,
  color,
  gap,
  size,
  children,
}: FxSeparatorProps) {
  const selectedOrientation = orientation
    ? sepOrnAttributes[orientation]
    : sepOrnAttributes.horizontal;

  const givenGap = gap ? GapAttributes[gap] : "";

  return (
    <div
      className={`relative flex justify-center items-center bg-transparent`}
      style={{
        margin:
          orientation === "horizontal" ? `${givenGap} 0px` : `0px ${givenGap}`,
      }}
    >
      <hr
        className={`${selectedOrientation} absolute`}
        style={{
          borderColor: color || "var(--primary-border-color)",
          width: size && `${size}`
        }}
      />
      <div className="absolute bg-transparent z-[1]">{children}</div>
    </div>
  );
}
