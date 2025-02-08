import { useCallback, useEffect, useState } from 'react'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import sanitizeHtml from 'sanitize-html';

export default function useProcessMDX(data: string) {
    const [content, setContent] = useState("")
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
        const cleanHtml = sanitizeHtml(htmlContent, {
            allowedAttributes: {
                'h1': ['id', 'style'],
                'h2': ['id', 'style'],
                'h3': ['id', 'style'],
                'h4': ['id', 'style'],
                'h5': ['id', 'style'],
                'h6': ['id', 'style'],
            },
            allowedIframeHostnames: ['www.youtube.com']
        });
        setContent(cleanHtml)

    }, [data])

    useEffect(() => {
        processContent()
    }, [processContent])

    return {
        content
    }
}


