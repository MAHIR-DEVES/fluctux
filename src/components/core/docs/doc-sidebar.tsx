"use client"
import React from 'react'
import FxRadio from '@/components/ui/fxradio'
import { DOC_TYPE } from '@/components/ui/constant'
import FxFavIcon from '@/components/ui/fxfav'
import { useRouter } from 'next/navigation'
import FxButton from '@/components/ui/fxbutton'
import useToggleOpen from '@/app/hooks/useToggleOpen'
import Link from 'next/link'
import { LeftArrowIcon } from '@/components/ui/icons/left-arrow-icon'

interface DocSidebarPropsType {
    docType: string
}

export default function DocSidebar({docType}: DocSidebarPropsType) {

    const { handleOpenArray, isOpenFromArray } = useToggleOpen({})
    const router = useRouter()

    const handleDocTypeChange = (value: string) => {
        console.log(value);
        router.push(`/docs/${value}/getting-started`)

    }


    return <aside className='w-[250px] h-screen sticky top-0 fx-primary-bg flex-shrink-0'>
        <nav className='h-[calc(100%-105px)] sticky top-[105px] overflow-y-scroll custom-scrollbar pr-2'>

            <FxButton variant='secondary' className='w-full  fx-flex-tl gap-2 p-2 mb-3 ' radius='primary' >
                <div className='p-2 rounded-[5px] border fx-primary-purple-border-50'>
                    <FxFavIcon size='sm' variant='default' />
                </div>
                <span className='font-medium'>Fluctux</span>
            </FxButton>

            <FxRadio onValueChange={handleDocTypeChange} align='start' alignItems='vertical' buttonType='modern' buttonStyles='fx-flex-cl rounded-[8px] gap-2 mb-3 p-2 w-full fx-secondary-bg sticky top-[0px] z-10' items={DOC_TYPE} layoutStyle='w-[230px]' labelStyles='w-full rounded-[5px]' initialValue={`${docType}`} closeMenuOnSelect={true} labelItemStyles={"fx-primary-purple-border-50 p-2 rounded-[5px] fx-primary-purple-transparent-bg"} buttonSvgContainerStyles={'fx-primary-purple-border-50 border p-2 rounded-[5px] fx-primary-purple-transparent-bg'} showDescInButton={true} />

            {
                Array.from({ length: 20 }).map((_, i) => {
                    return <>
                        <button className={`font-medium hover:fx-secondary-bg w-full fx-flex-between-ic p-1 pl-2 pr-2 rounded-[5px]  ${isOpenFromArray(`${i}`) && "fx-secondary-bg text-[var(--primary-color)]"}`} onClick={() => handleOpenArray(`${i}`)}>
                            <span>Hello world</span>
                            <LeftArrowIcon className={`${isOpenFromArray(`${i}`) ? "rotate-90" : "rotate-0"} transition-all duration-200`} />
                        </button>
                        <div className={`ml-2 mt-2 mb-2 flex flex-col border-l fx-border-color  fx-label-color font-medium transition-all duration-300  ${isOpenFromArray(`${i}`) ? "max-h-[100%] " : "max-h-0 opacity-0"} overflow-hidden`}>
                            <Link href={""} className='p-1 pl-5 pr-0 dark:hover:text-white hover:text-black relative'>
                                <span>Hello world</span>
                                <span className='absolute left-0 top-0 h-full w-[4px] fx-primary-purple-bg rounded-tr-[50px] rounded-br-[50px]'></span>
                            </Link>
                            <Link href={""} className='p-1 pl-5 pr-0 dark:hover:text-white hover:text-black'>
                                <span >Hello world</span>
                            </Link>
                            <Link href={""} className='p-1 pl-5 pr-0 dark:hover:text-white hover:text-black'>
                                <span >Hello world</span>
                            </Link>
                        </div>
                    </>
                })
            }

        </nav>
    </aside>
}


