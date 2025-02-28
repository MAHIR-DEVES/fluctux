import { THEME_ICONS } from '@/constants/global';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

export const useThemeSwitcher = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        if (resolvedTheme) {

            if (theme === "light") {
                setActiveIndex(0)
            } else if (theme === "dark") {
                setActiveIndex(1)
            } else {
                setActiveIndex(2)
            }
        }
    }, [theme, resolvedTheme]);

    const handleChangeAppearanceMode = (index: number) => {
        if (index === 0) {
            setTheme("light");
        } else if (index === 1) {
            setTheme("dark")
        }
        else {
            setTheme("system");
        }
    };

    const ThemeSwitcher: React.FC = () => (
        <div className='fx-flex-center w-fit rounded-[50px] border fx-border-color p-[2px]'>
            <ul className='fx-flex-center w-fit relative'>
                {
                    THEME_ICONS.map((item, i) => {
                        return <li onClick={() => handleChangeAppearanceMode(i)} key={i} className={`cursor-pointer rounded-[50%] flex-shrink-0 w-[30px] h-[30px] fx-flex-center fx-secondary-hover-bg ${activeIndex === i && "fx-third-bg"}`}>
                            {item.svg}
                        </li>
                    })
                }
                {/* <span
                    className="active-theme-mode"
                    style={{
                        transform: `translateX(${activeIndex * 100}%)`,
                    }}
                ></span> */}
            </ul>
        </div>
    )
    return {
        ThemeSwitcher, theme, resolvedTheme, setTheme
    }
}


