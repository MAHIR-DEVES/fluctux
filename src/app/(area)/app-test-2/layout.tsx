import Sidebar from '@/components/core/workspace/sidebars/Sidebar'
import Logo from '@/components/ui/fxlogo'
import React from 'react'

interface LayoutProps {
    children: React.ReactNode,
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <div className='w-full border-b fx-border-color fx-secondary-bg fixed top-0 left-0'>
                <div className='fx-flex-between-ic h-[60px] fx-dlayout-padding w-full'>
                    <Logo size='sm' />
                </div>
            </div>

            <div className='fx-flex-tr w-full mt-[61px]'>
                <Sidebar />
                <div className='fx-flex-center app-children-layout'>
                    {children}
                </div>
            </div>
        </>
    )
}
