import React from 'react'
import DocSidebar from '@/components/core/docs/doc-sidebar'
import { gql } from '@apollo/client'
import { apolloClient } from '@/lib/apollo-client'
import { notFound } from 'next/navigation'
import { DocNavListType } from '@/types/doc-types'


interface DocLayoutPropsType {
    children: React.ReactNode
    params: Promise<{ doctype: string }>
}


export const GET_DOC_NAV_LIST = gql`
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

            <div className='fx-flex-ct '>
                <div className='fx-flex-between-it max-w-[1200px] w-full gap-5'>

                    <DocSidebar docType={doctype} data={data} />
                    <main className='w-full h-fit'>
                        {children}
                    </main>
                </div>
            </div>

        </>

    )

}


