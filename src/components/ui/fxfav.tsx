import Image, { StaticImageData } from 'next/image'
import React from 'react'
import FAV_ICON_WHITE from "../../../public/fluctux-fav-white.png"
import FAV_ICON_BLACK from "../../../public/fluctux-fav-black.png"
import FAV_ICON_DEFAULT from "../../../public/fluctux-fav-primary.png"
import { SizeType } from './type'

interface FxFavIconPropsType {
    size?: keyof typeof iconSizeVariants
    className?: string,
    variant?: keyof typeof iconVariants
}

const iconSizeVariants: { [key in SizeType]: string } = {
    sm: "w-[20px] h-[20px]",
    md: "w-[30px] h-[30px]",
    lg: "w-[50px] h-[50px]",
    xl: "w-[80px] h-[80px]"
}

type IconVariantType = 'light' | 'dark' | 'default'

const iconVariants: { [key in IconVariantType]: StaticImageData } = {
    light: FAV_ICON_WHITE,
    dark: FAV_ICON_BLACK,
    default: FAV_ICON_DEFAULT

}


export function FxFavIcon({
    size,
    className,
    variant
}: FxFavIconPropsType) {
    const iconVariant = variant ? iconVariants[variant] : iconVariants.light
    const sizeVariant = size ? iconSizeVariants[size] : iconSizeVariants.md
    return <Image src={iconVariant} priority width={500} height={500} alt='fluctux-icon' className={`${sizeVariant} object-contain object-center ${className}`} />
}

