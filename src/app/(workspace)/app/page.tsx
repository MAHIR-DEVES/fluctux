import React from 'react'


export default async function GitPage() {
    // const [data, setData] = useState("")
    // const getDataa = useCallback(async () => {
    //     try {
    //         const response = await fetch(
    //             "https://raw.githubusercontent.com/gitmahin/graphQL-with-nextjs-ssr/d07d49d5a2546d8d715de75612db1f990b3723cd/README.md"
    //         );
    //         if (!response.ok) throw new Error("Failed to fetch");
    //         const data = await response.text(); // Use .text() for plain text like README
    //         const content = data
    //         console.log(content);
    //         // console.log(data.name);


    //         const processedContent = await unified()
    //             .use(remarkParse)
    //             .use(remarkRehype)
    //             .use(rehypeDocument, { title: '👋🌍' })
    //             .use(rehypeFormat)
    //             .use(rehypeStringify)
    //             .process(`${content}`)

    //         setData(processedContent.toString())

    //     } catch (error) {
    //         console.error(error);
    //     }

    // }, [])

    // get data of folders

    // const response = await fetch(
    //     "https://api.github.com/repos/gitmahin/graphQL-with-nextjs-ssr/contents/src/graphql/resolvers",
    //     {
    //         headers: {
    //             Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    //         }
    //     }
    // );
    // if (!response.ok) throw new Error("Failed to fetch");
    // const data = await response.json();
    // // const content = atob(data.content); // Decode base64 content
    // // console.log(content);
    // console.log(data);




    // useEffect(() => {
    //     getData()
    // }, [getData])




    return (
        <>
            <h1>Github fetch</h1>

        </>
    )
}


