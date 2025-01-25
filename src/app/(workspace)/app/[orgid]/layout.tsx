import React from 'react'

interface OrgLayoutPropsType {
    children: React.ReactNode
    header: React.ReactNode
}

export default function Layout({
    children,
    header
}: OrgLayoutPropsType) {
    return (
        <div>
            {header}
            <section className='w-full '>

            <div className='fx-org-layout-width mx-auto border-r border-l fx-border-color h-[500px]'>
            {children}

            </div>
            </section>
        </div>
    )
}


