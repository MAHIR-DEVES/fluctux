"use client"

import { TextAlignLeftIcon } from '@/components/ui/icons/text-allign-left-icon'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import { unified } from 'unified'

interface DocContentPropsType {
    data: string
}
export default function DocContent({ data }: DocContentPropsType) {
    const [content, setContent] = useState("")
    const [anchors, setAnchors] = useState<string[]>([]);

    const processContent = useCallback(async () => {
        const processedData = await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeFormat)
            .use(rehypeStringify)
            .use(rehypeSlug) // Generates IDs automatically
            .process(data)

        const htmlContent = processedData.toString()
        setContent(htmlContent)
   
    }, [data])

    useEffect(() => {
        processContent()
    }, [processContent])

    useEffect(() => {
        const headingLinks: string[] = []; // Temporary array to hold the anchor labels

        const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        headings.forEach((heading) => {
            const id = heading.getAttribute("id");
            if (id) {
                const formattedText = id
                    .split("-") // Split the string by "-"
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
                    .join(" "); // Join the words back with spaces

                headingLinks.push(formattedText);
            }
        });

        setAnchors(headingLinks); // Set the anchors state with the updated array
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
                        anchors.map((item, i) => {
                            return <Link href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} key={i} className='dark:hover:text-white hover:text-black'>
                                <li className='one-line-ellipsis'>{item}</li>
                            </Link>

                        })
                    }

                </ul>
            </nav>
        </aside>
    </section>
}

