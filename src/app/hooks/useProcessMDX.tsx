import { useCallback, useEffect, useState } from 'react'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import remarkGfm from 'remark-gfm'

export const useProcessMDX = (data: string) => {
    const [content, setContent] = useState("")
    const processContent = useCallback(async () => {
        const processedData = await unified()
            .use(remarkParse)
            .use(remarkGfm)
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

    return {
        content
    }
}


