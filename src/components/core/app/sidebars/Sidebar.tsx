"use client"
import FxButton from '@/components/ui/fxbutton'
import { AddIcon } from '@/components/ui/icons/add-icon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { ChevronsUpDown } from "lucide-react";

import {
    Collapsible,
    CollapsibleContent,
} from "@/components/ui/collapsible";
import { SettingsIcon } from '@/components/ui/icons/settings-icon'
import useToggleOpen from '@/app/hooks/useToggleOpen'
import FxCommandBox from '@/components/ui/fxcommandbox'
import FxInput from '@/components/ui/fxinput'
import FxTextArea from '@/components/ui/fxtextarea'
import FxRadio from '@/components/ui/fxradio'
import { PROJECT_COLORS, PROJECT_STATUS_ITEMS } from '@/components/ui/constant'
import { CancelIcon } from '@/components/ui/icons/cancle-icon'


export default function Sidebar() {
    const path_name = usePathname()
    const org_path = path_name.split("/")[2]
    const { isOpen: isCPOpen, setOpen: setCPOpen } = useToggleOpen({ id: "create-project", shortcutKey: "p" })

    const [openCollapsible, setOpenCollapsible] = useState<{
        [key: number]: boolean;
    }>({});

    const toggleCollapsible = (id: number) => {
        setOpenCollapsible((prevState: { [key: number]: boolean }) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const openProject = (id: number) => {
        const isProject = openCollapsible[id];
        if (!isProject) {
            setOpenCollapsible((prevState: { [key: number]: boolean }) => ({
                ...prevState,
                [id]: !prevState[id],
            }));
        }
    };

    const handleValueChange = (value: string) => {
        console.log('Selected value:', value);
    };

    const handleColorValue = (value: string) => {
        console.log('Selected color value:', value);
    }

    if (org_path === "org") {
        return <>
            <FxCommandBox open={isCPOpen} className='h-[400px] max-w-[600px] w-full' >

                <div className='overflow-y-auto h-full hide-scrollbar p-2 pb-16 pt-[60px]'>
                    <div className='w-full absolute backdrop-blur-lg top-0 left-0 p-3'>
                        <h2 className=' text-[17px] font-medium'>Create New Project</h2>
                        <FxButton onClick={() => setCPOpen(false)} variant='secondary' className='rounded-[50%] w-[35px] h-[35px] fx-flex-center border fx-border-color absolute top-[7px] right-[5px] z-10 hover:bg-red-600 hover:border-red-600'>
                            <CancelIcon />
                        </FxButton>
                    </div>
                    <FxInput variant='primary' size='md' radius='primary' className='w-full font-semibold ' placeholder='Project Name' />
                    <FxTextArea placeholder='Project Description' className='w-full mt-2' variant='primary' radius='primary' size='md' />
                 

                </div>
                <div className='h-[45px] w-full border-t fx-border-color bottom-0 absolute left-0 fx-secondary-bg fx-shadow-t fx-flex-between-ic p-1 z-10'>
                    <div className='fx-flex-cl gap-2'>
                        <FxRadio onValueChange={handleValueChange} align='start' alignItems='vertical' buttonType='modern' buttonStyles='fx-flex-center gap-2 p-[5px] w-[120px]' items={PROJECT_STATUS_ITEMS} layoutStyle='max-w-[250px] w-full' labelStyles='w-full rounded-[5px]' initialValue={"public"} closeMenuOnSelect={true} />
                        <FxRadio onValueChange={handleColorValue} align='start' alignItems='horizontal' buttonType='modern' buttonStyles='w-[35px] h-[35px] rounded-[5px] fx-flex-center' radius='tablet' items={PROJECT_COLORS} layoutStyle='max-w-[250px] w-full gap-2' labelStyles='w-fit rounded-[50px] p-[0px] pl-[0px] pr-[0px]' initialValue={"--project-purple"} closeMenuOnSelect={true} />
                    </div>
                    <div >
                        <FxButton variant='primary' className='p-[5px] pl-[30px] pr-[30px] font-medium' radius='tiny'>
                            Create
                        </FxButton>
                    </div>
                </div>
            </FxCommandBox>
            <aside className="w-[260px] overflow-y-auto  fx-layout-h-exc-hdr-app fixed bottom-0 left-0 fx-secondary-bg border-r fx-border-color ">
                <div className='w-full fx-dlayout-padding sticky top-0 backdrop-blur-xl '>

                    <div className="flex justify-between items-center w-full h-fit mb-3">
                        <div className="flex justify-between items-center w-full cursor-default ">

                            <div className="flex justify-center items-center gap-2 w-full">
                                <img
                                    src={"https://st2.depositphotos.com/3867453/9096/v/450/depositphotos_90960358-stock-illustration-letter-m-logo-icon-design.jpg"}
                                    alt=""
                                    className="w-[40px] h-[40px] fx-rounded border fx-border-color object-cover object-center"
                                />

                                <div className="w-full text-left">
                                    <h1 className="font-medium text-[17px] one-line-ellipsis">
                                        Ni Mahin Org's
                                    </h1>
                                    <p className="text-[14px] fx-label-color">
                                        Business
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <FxButton onClick={() => setCPOpen(true)} variant='primary' size='sm' className='w-full text-center font-medium fx-flex-center gap-2 ' radius='tiny'>
                        <AddIcon />
                        <p className='font-medium'>
                            Create New Project
                        </p>
                    </FxButton>

                </div>

                <nav className=' fx-dlayout-padding mb-24'>
                    <p className='fx-sec-label-color font-medium mb-1'>Projects</p>
                    <div className="space-y-2">
                        {Array.from({ length: 2 }).map((_, i) => {
                            return (
                                <Collapsible
                                    key={i + 1}
                                    open={openCollapsible[i + 1] || false}
                                    onOpenChange={() => toggleCollapsible(i + 1)}
                                    className="w-full space-y-2"
                                >
                                    <div className="flex items-center justify-start">
                                        <FxButton
                                            size="sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openProject(i + 1);
                                            }}
                                            draggable={true}
                                            radius='tiny'
                                            className="w-full h-[35px] flex justify-between items-center pr-[5px] bg-[var(--project-blue)]"
                                        >
                                            <p className={`text-left ${openCollapsible[i + 1] ? "text-white" : "fx-label-color"}  font-medium one-line-ellipsis`}>
                                                My Project -1
                                            </p>
                                            <div className='fx-flex-cr gap-1'>
                                                <div
                                                    className={`p-1 border ${openCollapsible[i + 1] ? "border-none bg-[#0091ff2f]" : "border-[#0091ff2f]"}   rounded-[5px]`}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleCollapsible(i + 1);
                                                    }}
                                                >
                                                    <ChevronsUpDown className="h-4 w-4" color='#b1b1b1' />
                                                </div>
                                                <div onClick={(e) => {
                                                    e.stopPropagation();
                                                }} className='p-1 hover:bg-[#0091ff2f] bg-transparent w-[25px] h-[25px] fx-flex-center rounded-[5px]'>
                                                    <SettingsIcon width={15} height={15} />
                                                </div>
                                            </div>
                                        </FxButton>
                                    </div>
                                    <CollapsibleContent className="pl-3">
                                        <Link href={"/app/my-org/projects/sgsdg/tasks"}>
                                            <li className="p-1 text-[15px] font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-whitetext-bgpr">

                                                <p>Tasks</p>
                                            </li>
                                        </Link>
                                        <Link href={"/app/my-org/projects/sgsdg/sheets"}>
                                            <li className="p-1 text-[15px] font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-whitetext-bgpr">

                                                <p>Sheets</p>
                                            </li>
                                        </Link>
                                        <Link href={"/app/my-org/projects/sgsdg/issues"}>
                                            <li className="p-1 text-[15px] font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-whitetext-bgpr">

                                                <p>Issues</p>
                                            </li>
                                        </Link>
                                        <Link href={"/app/my-org/projects/sgsdg/pages"}>
                                            <li className="p-1 text-[15px] font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-whitetext-bgpr">

                                                <p>Pages</p>
                                            </li>
                                        </Link>
                                    </CollapsibleContent>
                                </Collapsible>
                            );
                        })}
                    </div>
                </nav>
            </aside>
        </>
    }

    return <aside className="w-[260px] fx-layout-h-exc-hdr-app fixed bottom-0 left-0 fx-secondary-bg border-r fx-border-color">

    </aside>


}


