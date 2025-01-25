import Image from 'next/image'
import React from 'react'
import FAV_ICON from "../../../public/fluctux-fav-white.png"
import { SizeType, ThemeType } from './type'

interface FxFavIconPropsType {
    size?: keyof typeof iconSizeVariants
    theme?: keyof typeof iconTheme
}

const iconSizeVariants: { [key in SizeType]: string } = {
    sm: "w-[20px] h-[20px]",
    md: "w-[30px] h-[30px]",
    lg: "w-[50px] h-[50px]",
    xl: "w-[80px] h-[80px]"
}


const iconTheme: { [key in ThemeType]: string } = {
    dark: "invert-0",
    light: "invert-1"
}

export default function FxFavIcon({
    size,
    theme
}: FxFavIconPropsType) {
    const sizeVariant = size ? iconSizeVariants[size] : iconSizeVariants.md
    const themeVariant = theme ? iconTheme[theme] : iconTheme.dark
    return <Image src={FAV_ICON} priority width={500} height={500} alt='Fluctux Icon' className={`${sizeVariant} ${themeVariant} object-contain object-center`} />
}

