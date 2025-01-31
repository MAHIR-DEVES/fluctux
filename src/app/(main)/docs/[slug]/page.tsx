import { TextAlignLeftIcon } from '@/components/ui/icons/text-allign-left-icon'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='fx-flex-ct gap-5 relative w-full h-full'>


        <article className='w-full'>
          doc content
        </article>
        <aside className=' w-[220px] sticky top-[105px] max-h-[400px] overflow-y-auto custom-scrollbar doc-hide-scrollbar hover:doc-hide-scrollbar-show flex-shrink-0 text-[15px]'>
          <div className='fx-flex-cl gap-2 sticky top-0 fx-primary-bg pb-1'>
            <TextAlignLeftIcon width={15} height={15} />
            <h3 className='font-medium'>On this page</h3>
          </div>
          <nav>
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

export default page
