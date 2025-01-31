"use client"
import React from 'react'
import FxLogo from '@/components/ui/fxlogo'
import FxSeparator from '@/components/ui/fxseparator'
import useThemeSwitcher from '@/app/hooks/useThemeSwitcher'
import FxButton from '@/components/ui/fxbutton'
import { GithubCircleIcon } from '@/components/ui/icons/github-circle-icon'

import { SearchIcon } from '@/components/ui/icons/search-icon'
import { CommandKeyIcon } from '@/components/ui/icons/command-key-icon'
import useToggleOpen from '@/app/hooks/useToggleOpen'
import Link from 'next/link'
import { LeftArrowIcon } from '@/components/ui/icons/left-arrow-icon'
import { DashboardCircleSettingsIcon } from '@/components/ui/icons/dashboard-circle-settings-icon'
import Footer from '@/components/core/Footer'


interface DocLayoutPropsType {
    children: React.ReactNode
}

export default function Layout({
    children
}: DocLayoutPropsType) {

    const { ThemeSwitcher } = useThemeSwitcher()
    const { handleOpenArray, isOpenFromArray } = useToggleOpen({})

    return (
        <>
            <header className='fixed w-full h-[64px] fx-secondary-bg border-b fx-border-color fx-flex-between-ic pl-3 pr-3 z-50'>
                <div className='fx-flex-cl gap-3'>
                    <FxLogo className='w-[90px]' variant="default" />
                    <FxSeparator orientation='vertical' size='30px' />
                    <span className='fx-label-color text-[20px] font-medium'>Docs</span>
                </div>
                <div>
                    <FxButton variant='secondary' className='pl-2 pr-2 h-[35px] fx-flex-between-ic gap-36 fx-third-bg' radius='tablet'>
                        <div className='fx-flex-cl gap-3'>
                            <SearchIcon />
                            <span className='fx-sec-label-color'>Search documentation...</span>
                        </div>
                        <div className='fx-flex-cr pr-2 gap-1'>
                            <CommandKeyIcon width={15} height={15} />
                            <span className='text-[13px] fx-label-color'>Ctrl+k</span>
                        </div>
                    </FxButton>
                </div>
                <div className='fx-flex-cr gap-3'>

                    <div className="github-btn fx-flex-center w-fit gap-1 group cursor-pointer">

                        <GithubCircleIcon width={35} height={35} />
                        <span className='fx-label-color font-medium text-[16px] dark:group-hover:text-white group-hover:text-black'>1.4k</span>
                    </div>

                    <FxButton variant='primary' className='w-[100px] h-[35px] fx-flex-center font-medium text-white' radius='tablet'>
                        Sign in
                    </FxButton>

                    {/* auth by session */}
                    {/* <div className='group hover:outline outline-[3px] cursor-pointer outline-[var(--secondary-hover-bg)]  w-[35px] h-[35px] overflow-hidden rounded-[50%] flex-shrink-0'>

                        <Image src={""} width={250} height={250} alt='Profile' className='object-cover object-center w-full h-full  border fx-border-color  ' />
                    </div> */}

                    {ThemeSwitcher()}
                </div>
            </header>
            <div className='fx-flex-ct'>
                <div className='fx-flex-between-it max-w-[1200px] w-full  gap-5'>

                    <aside className='w-[250px] h-screen sticky top-[64px] fx-primary-bg flex-shrink-0'>
                        <nav className='h-[calc(100%-64px)] overflow-y-scroll custom-scrollbar pb-16 pr-2'>
                            <div className='pt-10 sticky top-[0px] z-10 bg-gradient-to-t from-transparent to-[var(--background)]'>
                                <FxButton variant='secondary' className='w-full fx-flex-tl gap-2 p-2 mb-3 ' radius='primary' >
                                    <div className='border fx-primary-purple-border-50 p-2 rounded-[5px] fx-primary-purple-transparent-bg'>
                                        <DashboardCircleSettingsIcon />
                                    </div>
                                    <span className='font-medium'>Fluctux</span>
                                </FxButton>
                            </div>
                            {
                                Array.from({ length: 20 }).map((_, i) => {
                                    return <>
                                        <button className={`font-medium hover:fx-secondary-bg w-full fx-flex-between-ic p-1 pl-2 pr-2 rounded-[5px]  ${isOpenFromArray(`${i}`) && "fx-secondary-bg text-[var(--primary-color)]"}`} onClick={() => handleOpenArray(`${i}`)}>
                                            <span>Hello world</span>
                                            <LeftArrowIcon className={`${isOpenFromArray(`${i}`) ? "rotate-90" : "rotate-0"} transition-all duration-200`} />
                                        </button>
                                        <div className={`ml-2 mt-2 flex flex-col border-l fx-border-color  fx-label-color font-medium transition-all duration-300  ${isOpenFromArray(`${i}`) ? "max-h-[100%] " : "max-h-0 opacity-0"} overflow-hidden`}>
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
                    <main className='w-full h-[3200px] mt-[64px] pt-10'>
                        {children}
                    </main>
                </div>
            </div>
            <Footer />
        </>

    )
}


