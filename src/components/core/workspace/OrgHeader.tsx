import { FxButton, FxFavIcon } from '@/components/ui'
import { ActivityIcon, NotificationIcon } from '@/components/ui/icons'
import { ChevronsUpDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const OrgHeader = () => {
    return <header className='h-[64px] fx-secondary-bg w-full fixed top-0 left-0 border-b fx-border-color fx-flex-center z-50'>
        <div className='fx-org-layout-width border-r border-l fx-border-color fx-flex-between-ic'>
            <div className='fx-flex-cl gap-3'>
                <div className='w-[64px] h-[64px] select-none border-r border-b fx-border-color fx-flex-center fx-third-bg hover:fx-primary-purple-bg cursor-pointer'>
                    <FxFavIcon variant='dark' className='invert-fav' />
                </div>
                <div className='fx-flex-center gap-2'>
                    <div className='fx-flex-center cursor-pointer flex-shrink-0 w-[160px] gap-2 border fx-border-color fx-secondary-hover-bg rounded-[8px] p-1 pl-2 pr-2 fx-third-bg'>
                        <Image src={""} width={100} height={100} className='object-cover object-center w-[30px] h-[30px] rounded-[50%] flex-shrink-0 border fx-border-color' alt='Org icon' />
                        <span className='font-medium text-[16px] one-line-ellipsis'>Fluctux Team</span>
                    </div>
                    <span className='text-[30px] fx-sec-separator-text-color font-light'>/</span>
                    <div className='fx-flex-between-ic max-w-[130px] w-fit gap-2 group'>
                        <span className='text-[16px] fx-label-color one-line-ellipsis'>My Project</span>
                        <FxButton className='fx-flex-center p-[6px] pl-[2px] pr-[2px] border-none bg-transparent group-hover:bg-[var(--secondary-hover-bg)]' variant='secondary' radius='tiny'>
                            <ChevronsUpDown color='var(--secondary-label-text-color)' size={20} />
                        </FxButton>
                    </div>
                </div>
            </div>

            <div className='pr-3 fx-flex-center gap-2'>
                <div className='w-[40px] h-[40px] rounded-[50%] flex-shrink-0 border fx-border-color fx-flex-center fx-secondary-hover-bg cursor-pointer'>
                    <ActivityIcon />
                </div>
                <div className='w-[40px] h-[40px] rounded-[50%] flex-shrink-0 border fx-border-color fx-flex-center fx-secondary-hover-bg cursor-pointer'>
                    <NotificationIcon />
                </div>
                <div className='rounded-[50%] flex-shrink-0 profile-image w-[40px] h-[40px]'>
                    <Image src={""} width={250} height={250} alt='Profile' className='object-cover object-center w-full h-full border fx-border-color rounded-[50%] flex-shrink-0' />
                </div>
            </div>
        </div>
    </header>
}