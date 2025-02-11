"use client"
import Image, { StaticImageData } from "next/image";
import React from "react";
import SECONDARY_LOGO from "../../../public/fluctux-white.png";
import { SizeType } from "@/components/ui/type";
import PRIMARY_DARK_LOGO from '../../../public/fluctux-logo-transparent.png'
import PRIMARY_LIGHT_LOGO from '../../../public/fluctux-logo-transparent-light.png'

type LogoType = "default" | "primaryDark" | "primaryLight" | "secondary"


interface LogoPropsType extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: keyof typeof logoSize;
  variant?: keyof typeof logoType
  className?: string
}

const logoType: { [key in LogoType]: StaticImageData } = {
  default: PRIMARY_DARK_LOGO,
  primaryDark: PRIMARY_DARK_LOGO,
  primaryLight: PRIMARY_LIGHT_LOGO,
  secondary: SECONDARY_LOGO
}

const logoSize: { [key in SizeType]: string } = {
  sm: "w-[80px]",
  md: "w-[120px]",
  lg: "w-[150px]",
  xl: "w-[200px]",
};

export function FxLogo({ size, variant, className }: LogoPropsType) {

  const imageSize = size ? logoSize[size] : "";
  const logoVariant = variant ? logoType[variant] : logoType.secondary

  return (
    <>
      {
        variant && variant === "default" ? <>
          <Image
            src={logoType.primaryLight}
            width={500}
            height={500}
            className={`${imageSize} object-contain select-none ${className} dark:hidden block`}
            alt="Fluctux"
            priority
          />
          <Image
            src={logoType.primaryDark}
            width={500}
            height={500}
            className={`${imageSize} object-contain select-none ${className} dark:block hidden`}
            alt="Fluctux"
            priority
          />
        </> : <Image
          src={logoVariant}
          width={500}
          height={500}
          className={`invert dark:invert-0 ${imageSize} object-contain select-none ${className}`}
          alt="Fluctux"
          priority
        />
      }

    </>
  );
}
