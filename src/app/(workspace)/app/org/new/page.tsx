import { ORG_VISIBILITY_OPTIONS } from '@/components/ui/constant'
import { FxButton, FxInput, FxRadio } from '@/components/ui'
import { ArrowRightStrokeIcon } from '@/components/ui/icons'
import React from 'react'
import Link from 'next/link'

export default function CreateNewOrgPage() {
  return (
    <div className='w-full fx-flex-center workspace-exclude-header'>
      <div className='max-w-[600px] w-full my-24 px-3'>
        <h1 className='text-[25px] font-semibold'>Create New Organization</h1>
        <div className='mt-10'>
          <div>

            <FxInput variant='outline' label='Organization Name' className='w-full px-4 py-3 placeholder:fx-sec-label-color' radius='tiny' placeholder='e.g. MyOrganization' />
          </div>
          <div className='mt-7'>
            <FxInput variant='outline' label='Organization Slug' className='w-full px-4 py-3  placeholder:fx-sec-label-color' radius='tiny' placeholder='e.g. my-organization' />
            <ul className='fx-label-color list-disc list-inside text-[14px] mt-2'>
              <li>
                The slug must be in lowercase.

              </li>
              <li>
                It can only include letters (a-z) and numbers (0-9).

              </li>
              <li>
                Special characters and spaces are not allowed.

              </li>
            </ul>
          </div>

          <div className='mt-7'>
            <FxRadio items={ORG_VISIBILITY_OPTIONS} initialValue='public' activeLabelClass='border border-[var(--primary-color)] ' buttonType='modern' layoutClass="w-[280px]" closeMenuOnSelect={true} labelStyles='rounded-[5px] w-full h-[80px] pl-3 pr-3 hover:fx-third-bg' radius='tiny' align="start" buttonClass="w-fit px-3 py-2 gap-2 fx-flex-center font-medium" />
          </div>
          <Link href={'/app/org/new/setup'}>
            <FxButton variant='primary' className='w-full mt-7 py-2 font-medium fx-flex-center gap-2' radius='tiny'>
              <span>Create</span>
              <ArrowRightStrokeIcon color='#ffffff' />
            </FxButton>
          </Link>
        </div>
      </div>
    </div>
  )
}


