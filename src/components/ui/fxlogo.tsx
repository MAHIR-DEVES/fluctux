import Image from "next/image";
import React from "react";
import white_logo from "../../../public/fluctux-white.png";
import { SizeType } from "@/components/ui/type";

type LogoType = "WHITE" | "DARK";

interface LogoPropsType extends React.ImgHTMLAttributes<HTMLImageElement> {
  color?: keyof typeof LogoColorAttributes;
  size?: keyof typeof logoSize;
}

const LogoColorAttributes: { [key in LogoType]: string } = {
  WHITE: "invert-0",
  DARK: "invert",
};

const logoSize: { [key in SizeType]: string } = {
  sm: "w-[80px]",
  md: "w-[120px]",
  lg: "w-[150px]",
  xl: "w-[200px]",
};

export default function Logo({ color, size }: LogoPropsType) {
  const imageColor = color
    ? LogoColorAttributes[color]
    : LogoColorAttributes.WHITE;

  const imageSize = size ? logoSize[size] : logoSize.md;

  return (
    <Image
      src={white_logo}
      width={500}
      height={500}
      className={`${imageColor} ${imageSize} object-contain`}
      alt="fluctux"
      priority
    />
  );
}
