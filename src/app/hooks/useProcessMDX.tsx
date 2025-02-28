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
import { visit } from 'unist-util-visit';


function remarkGithubAlerts() {
    return (tree: any) => {
      visit(tree, 'text', (node: any) => {
        if (node.value.includes('[WARNING]')) {
          node.type = 'html';
          node.value = `<div class="warning">${node.value.replace('[WARNING]', '')}</div>`;
        }
        if (node.value.includes('[TIP]')) {
          node.type = 'html';
          node.value = `<div class="tip">${node.value.replace('[TIP]', '')}</div>`;
        }
      });
    };
  }

export default function useProcessMDX(data: string) {
    const [content, setContent] = useState("")
    const processContent = useCallback(async () => {
        const processedData = await unified()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkRehype)
            .use(remarkGithubAlerts)
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


