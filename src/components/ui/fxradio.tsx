"use client"
import React, { useEffect, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import FxButton from './fxbutton';
import useToggleOpen from '@/app/hooks/useToggleOpen';
import { ROUNDED_VARIANTS } from './constant';

interface ItemType {
    label?: string,
    desc?: string,
    id: string,
    value: string,
    svg?: React.ReactNode
}

interface FxRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    children?: React.ReactNode,
    align?: 'start' | 'center' | 'end',
    buttonType?: keyof typeof radioButton
    items: ItemType[],
    layoutStyle?: string,
    initialValue?: string,
    closeMenuOnSelect?: boolean,
    alignItems?: keyof typeof alignItemsVariant,
    labelStyles?: string
    onValueChange?: (value: string) => void;
    radius?: keyof typeof ROUNDED_VARIANTS
    buttonStyles?: string
}

type RadioButtonType = "custom" | "modern"
type AlignItemsType = 'horizontal' | 'vertical'

const radioButton: { [key in RadioButtonType]: string } = {
    custom: "custom",
    modern: "modern"
}

const alignItemsVariant: { [key in AlignItemsType]: string } = {
    horizontal: 'justify-start items-start flex-wrap',
    vertical: 'flex-col justify-center items-start'
}

export default function FxRadio({
    className,
    children,
    align = 'center',
    buttonType = 'custom',
    items,
    layoutStyle,
    initialValue,
    closeMenuOnSelect = false,
    alignItems = 'vertical',
    labelStyles,
    onValueChange,
    radius = 'tiny',
    buttonStyles
}: FxRadioProps) {
    const [selectedValue, setSelectedValue] = useState<string>(`${initialValue}`);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        onValueChange?.(newValue);
    };

    const uiButton = buttonType ? radioButton[buttonType] : radioButton.custom;
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
                    uiButton === 'custom' ?
                        <div onClick={() => setOpen(true)}>
                            {children}
                        </div> : items ?
                            <FxButton onClick={() => setOpen(true)} variant='secondary' className={`${buttonStyles}`} radius={radius}>
                                {
                                    items.find(item => item.value === selectedValue)?.svg
                                }
                                <p>
                                    {
                                        items.find(item => item.value === selectedValue)?.label
                                    }
                                </p>
                            </FxButton> : <div className='leading-5'>
                                <p className='text-red-600 font-medium'>
                                    No items to display

                                </p>
                                <span className='fx-sec-label-color text-[14px]'>FxRadio</span>
                            </div>
                }
            </PopoverTrigger>
            <PopoverContent align={align}>
                <div className={`flex ${alignItemVariant} w-[200px] border fx-border-color rounded-[7px] p-1 fx-secondary-bg ${layoutStyle}`}>
                    {

                        items ? items.map((item, i) => {
                            return <React.Fragment key={i}>
                                <label htmlFor={`radio-${item.id}`} className={` ${selectedValue === item.value ? 'bg-[var(--primary-hover-color)]' : ''} fx-flex-cl gap-2 p-1 pl-3 pr-3 cursor-pointer rounded-[5px] group hover:fx-hover-primary-bg transition-all  ${labelStyles}`}>
                                    {
                                        item.svg &&
                                        <div className='w-[40px] h-[40px] rounded-[50%] border fx-border-color fx-flex-center flex-shrink-0'>
                                            {item.svg}
                                        </div>
                                    }
                                    {
                                        item.label &&

                                        <div className='flex justify-center items-start flex-col'>

                                            {
                                                item.label &&
                                                <span className={`font-medium ${selectedValue === item.value ? 'text-white' : 'fx-label-color'} fx-hover-primary-bg`}>{item.label}</span>
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

