"use client"
import { ORG_VISIBILITY_OPTIONS } from '@/components/ui/constant'
import { FxButton, FxInput, FxRadio } from '@/components/ui'
import { ArrowRightStrokeIcon } from '@/components/ui/icons'
import React, { useEffect } from 'react'
import Link from 'next/link'
import useReactForm from '@/app/hooks/useReactForm'
import { createOrgZodSchema } from '@/zod/organization'
import { OrgVisibilityType } from '@/mongo/types'
import { z } from 'zod'
import { createOrganization } from '@/actions/org.server'

export default function CreateNewOrgPage() {

  const {errors, handleSubmit, register, setValue} = useReactForm({ZOD_SCHEMA: createOrgZodSchema})


  const handleVisibilityChange = (value: string) => {
    const visibilityValue = value as OrgVisibilityType
    setValue("org_visibility", visibilityValue)
  }

  useEffect(() => {
    setValue("org_visibility", ORG_VISIBILITY_OPTIONS[0].value as OrgVisibilityType)
  }, [setValue])


  const onSubmit = async (data: z.infer<typeof createOrgZodSchema>) => {
    try {
      const response = await createOrganization(data)
      const { error, message } = response
      console.log(message);
      console.log(error);
      
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      window.alert("error")
    }
  }


  return (
    <div className='w-full fx-flex-center workspace-exclude-header'>
      <div className='max-w-[600px] w-full my-24 px-3'>
        <h1 className='text-[25px] font-semibold'>Create New Organization</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>
          <div>

            <FxInput {...register("org_name")} variant='outline' label='Organization Name' className='w-full px-4 py-3 placeholder:fx-sec-label-color' radius='tiny' placeholder='e.g. MyOrganization' />
            <p>{errors.org_name && errors.org_name?.message}</p>
          </div>
          <div className='mt-7'>
            <FxInput {...register("org_slug")}  variant='outline' label='Organization Slug' className='w-full px-4 py-3  placeholder:fx-sec-label-color' radius='tiny' placeholder='e.g. my-organization' />
            <p>{errors.org_slug && errors.org_slug?.message}</p>
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
            <FxRadio onValueChange={handleVisibilityChange} items={ORG_VISIBILITY_OPTIONS} initialValue='PUBLIC' activeLabelClass='border border-[var(--primary-color)] ' buttonType='modern' layoutClass="w-[280px]" closeMenuOnSelect={true} labelStyles='rounded-[5px] w-full h-[80px] pl-3 pr-3 hover:fx-third-bg' radius='tiny' align="start" buttonClass="w-fit px-3 py-2 gap-2 fx-flex-center font-medium" />
            <p>{errors.org_visibility && errors.org_visibility?.message}</p>
          </div>
       
            <FxButton variant='primary' type='submit' className='w-full mt-7 py-2 font-medium fx-flex-center gap-2' radius='tiny'>
              <span>Create</span>
              <ArrowRightStrokeIcon color='#ffffff' />
            </FxButton>
        
        </form>
      </div>
    </div>
  )
}


