"use client"
import React, { useState } from 'react'
import { GlobeIcon } from './icons/globe-icon';
import { LockIcon } from './icons/lock-icon';
import { TwoPeopleIcon } from './icons/two-people-icon';
import { SettingsIcon } from './icons/settings-icon';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import FxButton from './fxbutton';

interface FxRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    open?: boolean,
    children?: React.ReactNode,
    align?: 'start' | 'center' | 'end',
    buttonType?: keyof typeof radioButton

}

const data = [
    {
        label: "Public",
        id: "public",
        value: "public",
        svg: <GlobeIcon />
    },
    {
        label: "Private",
        id: "private",
        value: "private",
        svg: <LockIcon />
    },
    {
        label: 'Friends',
        id: 'friends',
        value: 'friends',
        svg: <TwoPeopleIcon />
    },
    {
        label: 'Custom',
        id: 'custom',
        value: 'custom',
        svg: <SettingsIcon />
    }
]

type RadioButtonType = "custom" | "modern"

const radioButton: { [key in RadioButtonType]: string } = {
    custom: "custom",
    modern: "modern"
}

export default function FxRadio({
    className,
    open,
    children,
    align = 'center',
    buttonType = 'custom',
}: FxRadioProps) {
    const [selectedValue, setSelectedValue] = useState<string>('public');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const uiButton = buttonType ? radioButton[buttonType] : radioButton.custom;

    return (
        <Popover open={open} >
            <PopoverTrigger asChild>
                {
                    uiButton === 'custom' ?
                        children :

                        <FxButton variant='secondary' className='fx-flex-center gap-2 p-[5px] w-[120px]' radius='tiny'>
                            {
                                data.find(item => item.value === selectedValue)?.svg
                            }
                            <p>
                                {
                                    data.find(item => item.value === selectedValue)?.label
                                }
                            </p>
                        </FxButton>
                }
            </PopoverTrigger>
            <PopoverContent align={align}>
                <div className={`flex flex-col justify-center items-start w-[200px] border fx-border-color rounded-[7px] p-1 fx-secondary-bg`}>
                    {
                        data.map((item, i) => {
                            return <React.Fragment key={i}>
                                <label htmlFor={`radio-${item.id}`} className={`${selectedValue === item.value ? 'bg-[var(--primary-hover-color)]' : ''} fx-flex-cl gap-2 p-1 pl-3 pr-3 w-full cursor-pointer rounded-[5px] group hover:fx-hover-primary-bg`}>
                                    {
                                        item.svg &&
                                        <div className='w-[40px] h-[40px] rounded-[50%] border fx-border-color fx-flex-center'>
                                            {item.svg}
                                        </div>
                                    }
                                    <div className='flex justify-center items-start flex-col'>
                                        {
                                            item.label &&
                                            <span className={`font-medium ${selectedValue === item.value ? 'text-white' : 'fx-label-color'} fx-hover-primary-bg`}>{item.label}</span>
                                        }

                                        {
                                            item.value &&
                                            <span className='text-[14px] fx-sec-label-color radio-description'>This is {item.value}</span>

                                        }
                                    </div>
                                </label>
                                <input type="radio" name='radio' id={`radio-${item.id}`} value={item.value} checked={selectedValue === item.value} onChange={handleChange} className={`hidden ${className}`} />
                            </React.Fragment>
                        })
                    }

                </div>
            </PopoverContent>
        </Popover>
    );
}

