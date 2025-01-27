"use client"
import React from 'react'
import FxLogo from '@/components/ui/fxlogo'
import FxSeparator from '@/components/ui/fxseparator'
import useThemeSwitcher from '@/app/hooks/useThemeSwitcher'


interface DocLayoutPropsType {
    children: React.ReactNode
}

export default function Layout({
    children
}: DocLayoutPropsType) {

    const { ThemeSwitcher } = useThemeSwitcher()

    return (
        <>
            <header className='fixed w-full h-[64px] fx-secondary-bg border-b fx-border-color fx-flex-between-ic pl-3 pr-3'>
                <div className='fx-flex-cl gap-3'>
                    <FxLogo className='w-[90px]' variant="default" />
                    <FxSeparator orientation='vertical' size='30px' />
                    <span className='fx-label-color text-[20px] font-medium'>Docs</span>
                </div>
                {ThemeSwitcher()}
            </header>
            <aside className='w-[300px] h-[calc(100%-64px)] border-r fx-border-color fixed bottom-0 fx-secondary-bg'>
                <nav>

                </nav>
            </aside>
            <main>
                {children}
            </main>
        </>
    )
}


