"use client"
import useProcessMDX from '@/app/hooks/useProcessMDX'
import { TextAlignLeftIcon } from '@/components/ui/icons/text-allign-left-icon'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

export default function DocContentPage() {
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)

  const { data } = useProcessMDX()

  const getData = useCallback(async () => {
    setLoading(true)
    console.log("rendering");

    const getProcessedData = await data("https://raw.githubusercontent.com/gitmahin/graphQL-with-nextjs-ssr/d07d49d5a2546d8d715de75612db1f990b3723cd/README.md")
    if (getProcessedData.data) {
      setContent(getProcessedData.data)
    } else {
      setContent("No data")
    }

    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      <section className='fx-flex-ct gap-5 relative w-full h-full'>

        {loading && <span>Loading...</span>}
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
    </>
  )
}


