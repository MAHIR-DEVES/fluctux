"use client"
import React, { useEffect, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ROUNDED_VARIANTS } from './constant';
import { FxButton } from './fxbutton';
import { useToggleOpen } from '@/app/hooks';

interface ItemType {
    label?: string,
    desc?: string,
    id: string,
    value: string,
    svg?: React.ReactNode
}

interface ClassNamesType {
    activeLabel?: string,
    buttonSvgContainer?: string,
    labelIconContainer?: string,
    button?: string,
    label?: string,
    layout?: string,
}

interface FxPopupRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    children?: React.ReactNode,
    align?: 'start' | 'center' | 'end',
    buttonType?: keyof typeof radioButton
    items: ItemType[],
    initialValue?: string,
    closeMenuOnSelect?: boolean,
    alignItems?: keyof typeof alignItemsVariant,
    onValueChange?: (value: string) => void,
    radius?: keyof typeof ROUNDED_VARIANTS,
    showDescInButton?: boolean,
    classNames?: ClassNamesType,
}

type RadioButtonType = "none" | "modern"
type AlignItemsType = 'horizontal' | 'vertical'

const radioButton: { [key in RadioButtonType]: string } = {
    none: "none",
    modern: "modern"
}

const alignItemsVariant: { [key in AlignItemsType]: string } = {
    horizontal: 'justify-start items-start flex-wrap',
    vertical: 'flex-col justify-center items-start'
}

export function FxPopupRadio({
    className,
    children,
    align = 'center',
    buttonType = 'none',
    items,
    initialValue,
    closeMenuOnSelect = false,
    alignItems = 'vertical',
    onValueChange,
    radius = 'tiny',
    showDescInButton = false,
    classNames = {
        activeLabel: "fx-third-bg",
        buttonSvgContainer: "",
        labelIconContainer: "",
        button: "",
        label: "",
        layout: "",
    }
}: FxPopupRadioProps) {
    const [selectedValue, setSelectedValue] = useState<string>(`${initialValue}`);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        onValueChange?.(newValue);
    };

    const uiButton = buttonType ? radioButton[buttonType] : radioButton.none;
    const alignItemVariant = alignItems ? alignItemsVariant[alignItems] : alignItemsVariant.vertical

    const { isOpen, setOpen } = useToggleOpen({
        id: 'fx-radio',
    })

    useEffect(() => {
        if (closeMenuOnSelect) {
            setOpen(false)
            return
        }
        return
    }, [selectedValue, closeMenuOnSelect])

    return (
        <Popover open={isOpen} onOpenChange={setOpen} >
            <PopoverTrigger asChild>
                {
                    uiButton === 'none' ?
                        <div onClick={() => setOpen(true)}>
                            {children}
                        </div> : items ?
                            <FxButton onClick={() => setOpen(true)} variant='secondary' className={`${classNames.button}`} radius={radius}>
                                <div className={`${classNames.buttonSvgContainer}`}>

                                    {
                                        items.find(item => item.value === selectedValue)?.svg
                                    }
                                </div>
                                <div className='text-left'>

                                    <p>
                                        {
                                            items.find(item => item.value === selectedValue)?.label
                                        }
                                    </p>
                                    {
                                        showDescInButton &&

                                        <span className='fx-sec-label-color one-line-ellipsis text-[13px]'>
                                            {
                                                items.find(item => item.value === selectedValue)?.desc
                                            }
                                        </span>
                                    }
                                </div>
                            </FxButton> : <div className='leading-5'>
                                <p className='text-red-600 font-medium'>
                                    No items to display

                                </p>
                                <span className='fx-sec-label-color text-[14px]'>FxPopupRadio</span>
                            </div>
                }
            </PopoverTrigger>
            <PopoverContent align={align}>
                <div className={`flex ${alignItemVariant} w-[200px] border fx-border-color rounded-[8px] p-1 fx-secondary-bg ${classNames.layout}`}>
                    {

                        items ? items.map((item, i) => {
                            return <React.Fragment key={i}>
                                <label htmlFor={`radio-${item.id}`} className={` ${selectedValue === item.value && `${classNames.activeLabel}`} fx-flex-cl gap-2 p-1 cursor-pointer  group  transition-all  ${classNames.label}`}>
                                    {
                                        item.svg &&
                                        <div className={`w-[40px] h-[40px] rounded-[50%] border fx-border-color fx-flex-center flex-shrink-0 ${classNames.labelIconContainer}`}>
                                            {item.svg}
                                        </div>
                                    }
                                    {
                                        item.label &&

                                        <div className='flex justify-center items-start flex-col'>

                                            {
                                                item.label &&
                                                <span className={`font-medium ${selectedValue === item.value ? 'text-[var(--foreground)]' : 'fx-label-color'} `}>{item.label}</span>
                                            }

                                            {
                                                item.desc &&
                                                <span className='text-[14px] fx-sec-label-color radio-description leading-[1.2rem]'>{item.desc}</span>

                                            }
                                        </div>
                                    }
                                </label>
                                <input type="radio" name='radio' id={`radio-${item.id}`} value={item.value} checked={selectedValue === item.value} onChange={handleChange} className={`hidden ${className}`} />
                            </React.Fragment>
                        }) : "Input items to display"
                    }

                </div>
            </PopoverContent>
        </Popover>
    );
}

