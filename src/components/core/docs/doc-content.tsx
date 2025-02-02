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
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import { StarFaceIcon } from '@/components/ui/icons/star-face-icon'
import { SmileIcon } from '@/components/ui/icons/smile-icon'
import { SadIcon } from '@/components/ui/icons/sad-icon'
import { AngryIcon } from '@/components/ui/icons/angry-icon'

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
            .use(rehypePrettyCode, {
                theme: 'material-theme-ocean',
                transformers: [
                    transformerCopyButton({
                        visibility: 'always',
                        feedbackDuration: 2_000,
                    }),
                ],
            })
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
        <div className='mt-[64px] pt-10 w-full'>

            <article dangerouslySetInnerHTML={{ __html: content }} className="prose prose-gray dark:prose-invert w-full "></article>


            <div className='border-t mt-10 fx-border-color'>
                <div className='w-full fx-flex-center mt-5'>
                    <div className='border fx-border-color rounded-[50px] p-1 gap-2 fx-flex-center w-fit'>
                        <span className='fx-sec-label-color text-[14px] font-medium ml-2'>Was this helpful?</span>
                        <div className='fx-flex-center w-fit'>


                            <span className='rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer hover:fx-secondary-bg'>
                                <StarFaceIcon />
                            </span>
                            <span className='rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer hover:fx-secondary-bg'>
                                <SmileIcon />
                            </span>
                            <span className='rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer hover:fx-secondary-bg'>
                                <SadIcon />
                            </span>
                            <span className='rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer hover:fx-secondary-bg'>
                                <AngryIcon />
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

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

