"use client"
import React from 'react'
import FxLogo from '@/components/ui/fxlogo'
import FxSeparator from '@/components/ui/fxseparator'
import useThemeSwitcher from '@/app/hooks/useThemeSwitcher'
import FxButton from '@/components/ui/fxbutton'
import { GithubCircleIcon } from '@/components/ui/icons/github-circle-icon'
import FxInput from '@/components/ui/fxinput'
import { SearchIcon } from '@/components/ui/icons/search-icon'
import { CommandKeyIcon } from '@/components/ui/icons/command-key-icon'


interface DocLayoutPropsType {
    children: React.ReactNode
}

export default function Layout({
    children
}: DocLayoutPropsType) {

    const { ThemeSwitcher } = useThemeSwitcher()

    return (
        <>
            <header className='fixed w-full h-[64px] fx-primary-bg border-b fx-border-color fx-flex-between-ic pl-3 pr-3'>
                <div className='fx-flex-cl gap-3'>
                    <FxLogo className='w-[90px]' variant="default" />
                    <FxSeparator orientation='vertical' size='30px' />
                    <span className='fx-label-color text-[20px] font-medium'>Docs</span>
                </div>
                <div>
                    <FxButton variant='secondary' className='pl-2 pr-2 h-[35px] fx-flex-between-ic gap-36' radius='tablet'>
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
            <aside className='w-[300px] h-[calc(100%-64px)] border-r fx-border-color fixed bottom-0 fx-primary-bg'>
                <nav>
                    <FxButton>
                        <span>Open it</span>
                    </FxButton>
                </nav>
            </aside>
            <main>
                {children}
            </main>
        </>
    )
}


