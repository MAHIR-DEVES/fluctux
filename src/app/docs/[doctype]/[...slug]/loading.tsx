"use client"
import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Loading() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [])
  return (
    <div className='fx-flex-ct gap-5 relative w-full h-full'>
      <div className='w-full mt-[64px] pt-10 overflow-hidden'>

        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} >
            <div className='fx-flex-cl gap-2 '>
              <Skeleton width={150} height={15} borderRadius={"50px"} />
              <Skeleton width={100} height={15} borderRadius={"50px"} />
              <Skeleton width={400} height={15} borderRadius={"50px"} />
            </div>
            <div className='fx-flex-cl gap-2'>
              <Skeleton width={280} height={15} borderRadius={"50px"} />
              <Skeleton width={250} height={15} borderRadius={"50px"} />
              <Skeleton width={100} height={15} borderRadius={"50px"} />
            </div>
            <div className='fx-flex-cl gap-2 '>
              <Skeleton width={180} height={15} borderRadius={"50px"} />
              <Skeleton width={180} height={15} borderRadius={"50px"} />
              <Skeleton width={180} height={15} borderRadius={"50px"} />
            </div>
            <div className='fx-flex-cl gap-2 '>

              <Skeleton width={250} height={15} borderRadius={"50px"} />
              <Skeleton width={100} height={15} borderRadius={"50px"} />
            </div>
            <div className='fx-flex-cl gap-2'>

              <Skeleton width={100} height={15} borderRadius={"50px"} />
              <Skeleton width={400} height={15} borderRadius={"50px"} />
            </div>
          </div>

        ))}
      </div>

      <div className=' w-[220px] sticky top-0 h-screen flex-shrink-0 text-[15px] doc-aside-loading'>
        <div className='h-[calc(100%-105px)] sticky top-[105px] overflow-y-auto custom-scrollbar doc-hide-scrollbar hover:doc-hide-scrollbar-show pb-16'>
          <div className='fx-label-color leading-7'>
            {
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i}>
                  <Skeleton height={15} borderRadius={"50px"} />
                  <Skeleton width={200} height={15} borderRadius={"50px"} />
                  <Skeleton width={150} height={15} borderRadius={"50px"} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}


