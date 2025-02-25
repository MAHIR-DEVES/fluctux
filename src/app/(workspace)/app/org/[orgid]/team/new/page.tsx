import { FxButton, FxInput, FxRadio, ORG_VISIBILITY_OPTIONS } from '@/components/ui'
import Link from 'next/link'
import React from 'react'

export default function NewTeamPage() {
  return (
    <div className='w-full fx-flex-center workspace-exclude-header'>
      <div className='max-w-[600px] w-full my-24 px-3'>
        <h1 className='text-[25px] font-semibold'>Create New Team</h1>
        <div className='mt-10'>
          <div>

            <FxInput variant='outline' label='Team Name' className='w-full px-4 py-3 placeholder:fx-sec-label-color' radius='tiny' placeholder='e.g. My Team' />
          </div>

          <div className='mt-7'>
            <FxRadio items={ORG_VISIBILITY_OPTIONS} initialValue='public' activeLabelClass='border border-[var(--primary-color)] ' buttonType='modern' layoutClass="w-[280px]" closeMenuOnSelect={true} labelStyles='rounded-[5px] w-full h-[80px] pl-3 pr-3 hover:fx-third-bg' radius='tiny' align="start" buttonClass="w-fit px-3 py-2 gap-2 fx-flex-center font-medium" />
          </div>
          <Link href={'/app/org/new/setup'}>
            <FxButton variant='primary' className='w-full mt-7 py-2 font-medium fx-flex-center gap-2' radius='tiny'>
              <span>Create</span>
            </FxButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
