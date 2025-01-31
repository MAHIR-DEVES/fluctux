import { useCallback } from 'react'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export default function useProcessMDX(url: string) {
    const getData = useCallback(async () => {
        try {
            // "https://raw.githubusercontent.com/gitmahin/graphQL-with-nextjs-ssr/d07d49d5a2546d8d715de75612db1f990b3723cd/README.md"
            const response = await fetch(
                url, {
                cache: 'no-cache'
            }
            );

            if (!response.ok) throw new Error("Failed to fetch");
            const textData = await response.text(); // Use .text() for plain text like README

            const processedData = await unified()
                .use(remarkParse)
                .use(remarkRehype)
                .use(rehypeFormat)
                .use(rehypeStringify)
                .process(`${textData}`)

            return processedData.toString()

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            throw new Error("Error fetching and processing MDX content");
        }

    }, [url])

    // get data of folders
    // const getData = useCallback(async () => {
    //     try {
    //         const response = await fetch(
    //             "https://api.github.com/repos/gitmahin/graphQL-with-nextjs-ssr/contents/src/graphql",
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    //                 }
    //             }
    //         );
    //         if (!response.ok) throw new Error("Failed to fetch");
    //         const data = await response.json();
    //         // const content = atob(data.content); // Decode base64 content
    //         // console.log(content);
    //         console.log(data);


    //     } catch (error) {
    //         console.error(error.message);
    //     }

    // }, [])

    return {
        getData
    }
}


