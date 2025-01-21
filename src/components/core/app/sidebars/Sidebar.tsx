"use client"
import FxButton from '@/components/ui/fxbutton'
import { AddIcon } from '@/components/ui/icons/add-icon'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ChevronsUpDown } from "lucide-react";

import {
    Collapsible,
    CollapsibleContent,
} from "@/components/ui/collapsible";
import { AddOneIcon } from '@/components/ui/icons/add-one-icon'
import { SettingsIcon } from '@/components/ui/icons/settings-icon'

export default function Sidebar() {
    const path_name = usePathname()
    const org_path = path_name.split("/")[2]

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const router = useRouter();

    const [openCollapsible, setOpenCollapsible] = useState<{
        [key: number]: boolean;
    }>({});

    const toggleCollapsible = (id: number) => {
        setOpenCollapsible((prevState: { [key: number]: boolean }) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const openProject = (id: number, path: string) => {
        const isProject = openCollapsible[id];
        if (!isProject) {
            setOpenCollapsible((prevState: { [key: number]: boolean }) => ({
                ...prevState,
                [id]: !prevState[id],
            }));
            return router.push(`${path}`);
        }

        if (path_name !== path) {
            return router.push(`${path}`);
        }
    };

    if (org_path === "org") {
        return <aside className="w-[260px] overflow-y-auto  fx-layout-h-exc-hdr-app fixed bottom-0 left-0 fx-secondary-bg border-r fx-border-color ">
            <div className='w-full fx-dlayout-padding sticky top-0 backdrop-blur-xl'>

                <FxButton variant='primary' size='sm' className='w-full text-center font-medium fx-flex-center gap-2 ' radius='tiny'>
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
                                            openProject(i + 1, "/app/my-org/projects/sdgsdg");
                                        }}
                                        radius='tiny'
                                        className="w-full flex justify-between items-center pr-[5px] bg-[var(--project-blue)]"
                                    >
                                        <p className={`text-left ${openCollapsible[i + 1] ? "text-white" : "fx-label-color"}  font-medium one-line-ellipsis`}>
                                            My Project -1
                                        </p>
                                        <div className='fx-flex-cr gap-1'>
                                            <div
                                                className={`p-1 border ${openCollapsible[i + 1] ? "border-none bg-[#6aeeae30]" : "border-[#6aeeae30]"}   rounded-[5px]`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleCollapsible(i + 1);
                                                }}
                                            >
                                                <ChevronsUpDown className="h-4 w-4" />
                                            </div>
                                            <FxButton className='p-1 hover:bg-[#6aeeae30] bg-transparent w-[25px] h-[25px] fx-flex-center' radius='tiny'>
                                                <SettingsIcon width={15} height={15}/>
                                            </FxButton>
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
    }

    return <aside className="w-[260px] fx-layout-h-exc-hdr-app fixed bottom-0 left-0 fx-secondary-bg border-r fx-border-color">

    </aside>


}


