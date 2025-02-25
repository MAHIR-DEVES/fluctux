import { FxButton, FxSeparator } from '@/components/ui'
import React from 'react'

export default function OrgSetupPage() {
    return (
        <div className='workspace-exclude-header w-full fx-flex-center'>
            <div className='max-w-[500px] w-full my-24'>
                <div>
                    <h2 className='text-[16px] font-medium '>Continue With Blank Organization</h2>

                </div>

                <FxSeparator orientation='horizontal' gap='md' />

                <div>
                    <h2 className='text-[16px] font-medium '>Choose A Template</h2>
                </div>

                <FxButton variant='primary' className='w-full mt-7 py-2 font-medium fx-flex-center gap-2' radius='tiny'>
                    <span>Setup</span>
                </FxButton>
            </div>
        </div>
    )
}

