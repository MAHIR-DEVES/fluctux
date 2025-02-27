
import { OrgHeader } from '@/components/core/workspace'
import React from 'react'

interface OrgLayoutPropsType {
    children: React.ReactNode
}

export default function Layout({
    children,

}: OrgLayoutPropsType) {
    return (
        <div>
            <OrgHeader />
            <section className='w-full'>
                <div className='fx-org-layout-width mx-auto fx-border-color h-full w-full'>
                    {children}
                </div>
            </section>
        </div>
    )
}


