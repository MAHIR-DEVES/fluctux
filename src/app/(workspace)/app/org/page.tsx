import FxButton from '@/components/ui/fxbutton'
import FxOverlayImages from '@/components/ui/fxoverlayimages'
import { HouseTwoIcon } from '@/components/ui/icons/house-two-icon'
import { LockIcon } from '@/components/ui/icons/lock-icon'
import { ThreeDotIcon } from '@/components/ui/icons/three-dot-icon'
import React from 'react'

export default function OrgMainPage() {
    return (
        <>

            <div className='w-full fx-flex-between-ic p-3 border-b fx-border-color'>
                <h1 className='text-[25px] font-medium'>Organizations</h1>
                <FxButton variant='primary' size='md' radius='primary' className='font-medium text-[16px] fx-flex-center gap-2'>
                    <HouseTwoIcon />
                    <span>
                        Create New
                    </span>
                </FxButton>
            </div>

            <section>
                <div className='grid '>
                    <h2>My organization</h2>
                    <LockIcon />
                    <span>Owner</span>
                    <div>
                        <span>Running</span>

                    </div>
                    <div>
                        <FxOverlayImages />
                        <span>Contributors</span>
                    </div>
                    <span>
                        5 hours ago
                    </span>
                    <ThreeDotIcon />
                </div>
            </section>

        </>
    )
}


