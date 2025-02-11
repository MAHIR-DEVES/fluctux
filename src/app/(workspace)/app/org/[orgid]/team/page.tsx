"use client"

import { FxButton, FxInput, FxOverlayImages, TopLoading } from '@/components/ui'
import { AddIcon, GroupIcon, LockIcon } from '@/components/ui/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TeamPage() {

  return (
    <div className='w-full pt-[64px]'>
      <TopLoading />
      <div className='w-full h-[300px] bg-gradient-to-t relative from-[var(--background)] to-[var(--gradient-team-header)] fx-flex-center'>

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--gradient-grid-team-header)_1px,transparent_1px),linear-gradient(to_bottom,var(--gradient-grid-team-header)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>


        <div className='max-w-[1100px] w-full fx-flex-between-ic'>
          <div>
            <div className='fx-flex-cl gap-2'>
              <GroupIcon width={45} height={45} />
              <h1 className='text-[3rem] font-medium'>Teams</h1>

            </div>
            <p className='text-[20px] fx-label-color'>Build your dream team, collaborate, and achieve more together!</p>
          </div>

          <div>
            <FxButton variant='primary' size='md' radius='primary' className='font-medium text-[16px] fx-flex-center gap-2'>
              <AddIcon />
              <span>
                Create Team
              </span>
            </FxButton>
          </div>
        </div>

      </div>
      <div className='fx-flex-center'>
        <div className='team-nav max-w-[1100px] w-full h-[50px] fx-flex-between-ic'>
          <nav className='w-full fx-flex-cl'>
            <ul className='fx-flex-cl gap-2'>
              <Link href={""}>
                <li className='border p-3 h-[40px] fx-flex-center fx-rounded font-medium fx-label-color fx-secondary-bg fx-border-color'>All</li>
              </Link>
              <Link href={""}>
                <li className='border p-3 h-[40px] fx-flex-center fx-rounded font-medium fx-label-color fx-secondary-bg fx-border-color'>My Teams</li>
              </Link>
            </ul>
          </nav>

          <div className='fx-flex-cr gap-2'>
            <FxInput variant='primary' className='h-[40px] pl-2 pr-2' radius='primary' placeholder='Search Teams...' />

          </div>
        </div>
      </div>
      <div className='w-full fx-flex-center mb-24 mt-3'>
        <div className='max-w-[1100px] w-full team-container'>
          {
            Array.from({ length: 5 }).map((item, i) => {
              return <div key={i} className='team-card w-full h-fit rounded-[8px] border fx-border-color fx-primary-bg overflow-hidden'>
                <div className=' fx-secondary-bg pb-3'>
                  <div>
                    <div >

                      <Image src={""} width={500} height={500} className='w-full h-[100px] object-cover object-top border fx-border-color' alt='cover-image' />

                      <div className='fx-flex-cl gap-3 p-5 pb-0 pt-0 relative'>
                        <Image src={""} width={100} height={100} alt='team-image' className='w-[60px] absolute bottom-[0px] h-[60px] object-cover object-center border fx-border-color rounded-[8px]' />
                        <h2 className='text-[20px] font-medium one-line-ellipsis translate-x-[70px] translate-y-[3px]'>Ni Mahins Team</h2>
                      </div>
                    </div>

                    <p className='two-line-ellipsis p-5 pt-0 text-[15px] fx-label-color mt-3 h-[45px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente enim itaque sunt quod, corrupti vel praesentium architecto corporis rerum voluptatem magnam voluptas minus ullam deserunt ratione at iste! Accusamus veritatis et distinctio dolor quo accusantium dolore tempora similique voluptas saepe? Possimus animi officia tempora non saepe consequuntur quia hic exercitationem.</p>
                  </div>
                  <div className='fx-flex-between-ic p-5 border-t fx-border-color mt-3 pt-3 pb-0'>
                    <div className='fx-flex-cl'>
                      <FxOverlayImages />
                      <span className='text-[25px] fx-label-color font-light'>+</span>
                      <span className='fx-label-color pl-1'>900</span>
                      <span className='fx-label-color pl-1'>Contributors</span>
                    </div>
                    <LockIcon />
                  </div>
                </div>

                <div className='w-full fx-primary-bg p-5'>
                  <FxButton variant='primary' className='font-medium w-full' size='md' radius='primary'>
                    Join Team
                  </FxButton>
                </div>
              </div>
            })
          }

        </div>
      </div>
    </div>
  )
}


