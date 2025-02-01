"use client"

import { TextAlignLeftIcon } from '@/components/ui/icons/text-allign-left-icon'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

interface DocContentPropsType {
    data: string
}
export default function DocContent({ data }: DocContentPropsType) {
    const [content, setContent] = useState("")

    const processContent = async () => {
        const processedData = await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeFormat)
            .use(rehypeStringify)
            .process(data) // No need to wrap data in a string template

        const htmlContent = processedData.toString()
        setContent(htmlContent)
    }

    useEffect(() => {
        processContent()
    }, [content])


    return <section className='fx-flex-ct gap-5 relative w-full h-full'>

        <article dangerouslySetInnerHTML={{ __html: content }} className="prose prose-gray dark:prose-invert w-full mt-[64px] pt-10"></article>

        <aside className=' w-[220px] sticky top-0 h-screen flex-shrink-0 text-[15px]'>
            <nav className='h-[calc(100%-105px)] sticky top-[105px] overflow-y-auto custom-scrollbar doc-hide-scrollbar hover:doc-hide-scrollbar-show pb-16'>
                <div className='fx-flex-cl gap-2 sticky top-0 fx-primary-bg pb-1'>
                    <TextAlignLeftIcon width={15} height={15} />
                    <h3 className='font-medium'>On this page</h3>
                </div>
                <ul className='fx-label-color leading-7'>
                    {
                        Array.from({ length: 70 }).map((_, i) => {
                            return <Link href={""} key={i}>
                                <li>Hello world</li>
                            </Link>

                        })
                    }

                </ul>
            </nav>
        </aside>
    </section>
}

