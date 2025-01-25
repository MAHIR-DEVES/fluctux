import FxButton from '@/components/ui/fxbutton'
import { AddIcon } from '@/components/ui/icons/add-icon'
import { GroupIcon } from '@/components/ui/icons/group-icon'
import { LockIcon } from '@/components/ui/icons/lock-icon'
import TopLoading from '@/components/ui/toploading'
import Image from 'next/image'
import React from 'react'

export default function TeamPage() {
  return (
    <div className='w-full'>
      <TopLoading/>
      <div className='w-full h-[300px] bg-gradient-to-t relative from-[var(--background)] to-[var(--gradient-team-header)] fx-flex-center'>

  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--gradient-grid-team-header)_1px,transparent_1px),linear-gradient(to_bottom,var(--gradient-grid-team-header)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
  </div>
  

        <div className='max-w-[1200px] w-full fx-flex-between-ic'>
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
      <div className='w-full fx-flex-center mb-24'>

        <div className=' w-fit team-container'>
          {
            Array.from({length: 5}).map((item, i) =>{
              return <div key={i} className='team-card max-w-[350px] w-full h-fit rounded-[8px] border fx-border-color fx-primary-bg overflow-hidden'>
              <div className='p-5 fx-secondary-bg pb-3'>
                <div>
                  <div className='fx-flex-tl gap-3'>
                    <Image src={""} width={100} height={100} alt='team-image' className='w-[50px] h-[50px] object-cover object-center border fx-border-color rounded-[8px]' />
                  <h2 className='text-[25px] font-medium one-line-ellipsis'>Ni Mahins Team</h2>
  
                  </div>
  
                  <p className='two-line-ellipsis text-[15px] fx-label-color mt-3 h-[45px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente enim itaque sunt quod, corrupti vel praesentium architecto corporis rerum voluptatem magnam voluptas minus ullam deserunt ratione at iste! Accusamus veritatis et distinctio dolor quo accusantium dolore tempora similique voluptas saepe? Possimus animi officia tempora non saepe consequuntur quia hic exercitationem.</p>
                </div>
                <div className='fx-flex-between-ic border-t fx-border-color mt-3 pt-3'>
                  <div className='fx-flex-cl'>
  
                    <div className='relative w-[75px] h-[30px]'>
                      <Image src={""} width={100} height={100} alt='image' className='w-[30px] h-[30px] rounded-[50%] flex-shrink-0 absolute left-0 bg-red-500 z-[5] border fx-border-color' />
                      <Image src={""} width={100} height={100} alt='image' className='w-[30px] h-[30px] rounded-[50%] flex-shrink-0 absolute left-[20px] bg-blue-700 z-[4] border fx-border-color' />
                      <Image src={""} width={100} height={100} alt='image' className='w-[30px] h-[30px] rounded-[50%] flex-shrink-0 absolute left-[40px] bg-pink-700 z-[3] border fx-border-color' />
                      
                    </div>
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


