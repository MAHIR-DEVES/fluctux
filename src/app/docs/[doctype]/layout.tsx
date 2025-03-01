import React from 'react'
import { gql } from '@apollo/client'
import { apolloClient } from '@/lib/apollo-client'
import { notFound } from 'next/navigation'
import { DocNavListType } from '@/components/core/docs'
import DocSidebar from '@/components/core/docs/doc-sidebar'


interface DocLayoutPropsType {
    children: React.ReactNode
    params: Promise<{ doctype: string }>
}

const GET_DOC_NAV_LIST = gql`
  query GetDocNavList($docType: String) {
    docNavList(docType: $docType) {
      name,
      path,
      type,
      docNavTreeList {
        name,
        type,
        path
      }
    }
  }
`
export async function generateStaticParams() {
    const docTypes = ['user', 'developer'];

    return docTypes.map((type) => {
        return {
            docType: type
        }
    })
}

export default async function Layout({
    children, params
}: DocLayoutPropsType) {
    // debugging the results
    // generateStaticParams().then((params) => {
    //     console.log(params);
    // });

    const { doctype } = await params
    const { data } = await apolloClient.query<{
        docNavList: DocNavListType[]
    }>({
        query: GET_DOC_NAV_LIST,
        variables: { docType: `${doctype}` },
        fetchPolicy: "no-cache"
    })

    if (!data.docNavList.length) {
        return notFound();
    }

    return (
        <>

            <div className='fx-flex-ct pl-2 pr-2 doc-main-layout-wrapper'>
                <div className='fx-flex-between-it fx-layout-max-1200 gap-5 doc-main-layout-container'>

                    <DocSidebar docType={doctype} data={data} />
                    <main className='w-full h-fit'>
                        {children}
                    </main>
                </div>
            </div>

        </>

    )

}


