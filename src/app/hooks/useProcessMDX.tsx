import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export default function useProcessMDX() {

    const data = async (url: string) => {
        try {
            const response = await fetch(
                url,
                {
                    cache: 'no-cache'
                }
            );

            if (!response.ok) return {error: "Error fetching data"}
            const textData = await response.text(); // Use .text() for plain text like README

            const processedData = await unified()
                .use(remarkParse)
                .use(remarkRehype)
                .use(rehypeFormat)
                .use(rehypeStringify)
                .process(`${textData}`)

            return {data: processedData.toString()}

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            return {error: "Error processing data"}
        }

    }

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
        data
    }
}


