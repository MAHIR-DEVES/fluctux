"use client"
import React, { useCallback, useEffect, useState } from 'react'

export default function GitPage() {
    const [data, setData] = useState("")
    const getData = useCallback(async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/gitmahin/graphQL-with-nextjs-ssr/contents/README.md",
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
            }
          }
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        const content = atob(data.content); // Decode base64 content
        console.log(content);
        setData(content)
        console.log(data.name);


      } catch (error) {
        console.error(error.message);
      }

    }, []) 

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


    useEffect(() => {
        getData()
    }, [getData])


    return (
        <>
          <h1>Github fetch</h1>  
          <div>
            {data}
          </div>
        </>
    )
}


