"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const breadcrumbs = [
    {
        label: "Projects", href: "/app/my-org/projects/gdsg"
    },
    {
        label: "Tasks", href: "/"
    },
]

export default function AppHeader() {
    const path_name = usePathname()
    const arrOfPathname = path_name.split("/")
    return (
        <div className='w-full h-[50px] border-b border-r border-l fx-border-color z-[100] sticky top-0 fx-secondary-bg flex justify-between items-center pl-3 pr-3'>
            <div className='flex justify-start items-center'>
                {breadcrumbs.map((item, i) => (
                    <React.Fragment key={i}>
                        <Link href={item.href}>
                            <div>
                                <p className={`font-normal ${arrOfPathname.includes(`${item.label.toLowerCase()}`) ? "text-white": "fx-label-color"} hover:text-white`}>{item.label}</p>
                            </div>
                        </Link>
                        {i < breadcrumbs.length - 1 && <span className='p-0 pl-2 pr-2 fx-sec-label-color'>/</span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}


