import { FxButton, FxOverlayImages } from '@/components/ui'
import { HouseTwoIcon, LockIcon, ThreeDotIcon } from '@/components/ui/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OrgMainPage() {
    return (
        <div className='workspace-exclude-header'>
            <div className='w-full fx-flex-between-ic p-3 border-b fx-border-color '>
                <h1 className='text-[25px] font-medium'>Organizations</h1>
                <Link href={"/app/org/new"}>
                <FxButton variant='primary' size='md' radius='primary' className='font-medium text-[16px] fx-flex-center gap-2'>
                    <HouseTwoIcon />
                    <span>
                        Create New
                    </span>
                </FxButton>
                </Link>
            </div>

            <section className='fx-rounded overflow-hidden border fx-border-color mt-5'>
                {
                    Array.from({length: 3}).map((_, i) =>{
                        return <div key={i} className='grid grid-cols-[1fr_300px_140px_140px_140px_50px] w-full h-[70px] gap-6 justify-items-center items-center fx-secondary-bg p-3 shborder'>
                        <div className='w-full fx-flex-cl gap-2'>
                            <h2 className='text-[16px] font-medium'>My organization</h2>
                            <LockIcon />
    
                        </div>
                        <div className=' w-full fx-flex-cl gap-1 '>
                            <FxOverlayImages />
    
                            <span className='fx-label-color '>200 Contributors</span>
                        </div>
                        <div className='w-full fx-flex-cl gap-2 group '>
                            <span className='fx-label-color group-hover:text-[var(--foreground)]'>Owner:</span>
                            <Image src={""} width={100} height={100} alt='image' className='w-[30px] h-[30px] select-none cursor-pointer rounded-[50%] flex-shrink-0  bg-yellow-400 border fx-border-color' />
                        </div>
                        <div className=' w-full text-right  '>
                            <span className='fx-label-color '>Running</span>
    
                        </div>
    
                        <span className='w-full text-right fx-label-color '>
                            5 hours ago
                        </span>
                        <FxButton variant='secondary' className='w-[40px] h-[40px] border fx-border-color fx-flex-center' radius='circle'>
                            <ThreeDotIcon />
    
                        </FxButton>
                    </div>
                    })
                }
                
            </section>

        </div>
    )
}


