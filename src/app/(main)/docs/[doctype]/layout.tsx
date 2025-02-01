import React from 'react'
import Footer from '@/components/core/Footer'
import DocHeader from '@/components/core/docs/doc-header'
import DocSidebar from '@/components/core/docs/doc-sidebar'


interface DocLayoutPropsType {
    children: React.ReactNode
    params: Promise<{ doctype: string }>
}

export default async function Layout({
    children, params
}: DocLayoutPropsType) {

    const { doctype } = await params

    return (
        <>
            <DocHeader />
            <div className='fx-flex-ct '>
                <div className='fx-flex-between-it max-w-[1200px] w-full gap-5'>

                    <DocSidebar docType={doctype} />
                    <main className='w-full h-fit'>
                        {children}
                    </main>
                </div>
            </div>
            <Footer />
        </>

    )
}


