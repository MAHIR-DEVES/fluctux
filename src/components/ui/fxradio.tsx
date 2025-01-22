"use client"
import React, { useState } from 'react'
import { GlobeIcon } from './icons/globe-icon';

interface FxRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string,
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
        svg: <GlobeIcon />
    },
    {
        label: 'Friends',
        id: 'friends',
        value: 'friends',
        svg: <GlobeIcon />
    },
    {
        label: 'Custom',
        id: 'custom',
        value: 'custom',
        svg: <GlobeIcon />
    }
]

export default function FxRadio({
    className
}: FxRadioProps) {
    const [selectedValue, setSelectedValue] = useState<string>('public');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className='flex flex-col justify-center items-start w-[200px] border fx-border-color rounded-[7px] p-1 fx-secondary-bg'>
            {
                data.map((item, i) => {
                    return <React.Fragment key={i}>
                        <label htmlFor={`radio-${item.id}`} className={`${selectedValue === item.value ? 'bg-[#1f1f1f]' : ''} fx-flex-cl gap-2 p-1 pl-3 pr-3 w-full cursor-pointer rounded-[5px] group hover:fx-hover-primary-bg`}>
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
                        <input type="radio" name='radio' id={`radio-${item.id}`} value={item.value} checked={selectedValue === item.value} onChange={handleChange} className='hidden' />
                    </React.Fragment>
                })
            }

        </div>
    );
}

