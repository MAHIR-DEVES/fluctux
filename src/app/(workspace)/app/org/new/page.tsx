import { ORG_VISIBILITY_OPTIONS } from '@/components/ui/constant'
import FxButton from '@/components/ui/fxbutton'
import FxInput from '@/components/ui/fxinput'
import FxRadio from '@/components/ui/fxradio'
import { BlankIcon } from '@/components/ui/icons/blank-icon'
import { CodeIcon } from '@/components/ui/icons/code-icon'
import React from 'react'

export default function CreateNewOrgPage() {
  return (
    <div className='w-full fx-flex-center h-screen'>
      <div className='border-l border-r fx-border-color max-w-[600px] w-full flex-shrink-0 h-full overflow-y-auto pt-[64px]'>
        <div className='font-medium text-[17px] w-full p-3 border-b fx-border-color sticky top-0 backdrop-blur-md z-[1]'>
          Create New Organization
        </div>
        <div className='w-full fx-flex-center pt-16'>
          <div className='max-w-[450px] w-full'>
            <div>
              <p className='fx-label-color font-medium text-[15px]'>Name Your Organization</p>
              <FxInput variant='primary' radius='primary' className='p-2 pl-3 pr-3 mt-1 w-full font-medium' />
            </div>
            <div className='mt-3 relative '>
              <p className='fx-label-color font-medium text-[15px]'>Organization URL</p>
              <span className='absolute top-[34px] left-3 fx-label-color'>org/</span>
              <FxInput variant='primary' radius='primary' className='p-2 pl-12 pr-3 mt-1 w-full font-medium' />
              <ul className='text-[14px] fx-sec-label-color list-inside list-disc mt-2'>
                <li>The slug must be in lowercase.</li>
                <li>It can only include letters (a-z) and numbers (0-9).</li>
                <li>Special characters and spaces are not allowed.</li>
              </ul>
            </div>


            <div className='mt-10 border fx-border-color fx-flex-between-ic rounded-[10px] p-1 pl-3'>
              <span className='fx-label-color font-medium'>Visibility</span>
              <FxRadio items={ORG_VISIBILITY_OPTIONS} initialValue='public' buttonType='modern' layoutStyle="w-[280px]" closeMenuOnSelect={true} labelStyles='rounded-[5px] w-full h-[80px] pl-3 pr-3' radius='primary' align="end" buttonClass="w-fit p-2 pl-3 pr-3 gap-2 fx-flex-center font-medium" />
            </div>

            <div className='mt-10 mb-10 w-full border-t fx-border-color'>
              <p className=' text-[15px] font-medium mt-5 mb-5'>Set Up Your Organization</p>
              <div>
                <label htmlFor="template-blank" className='fx-flex-cl gap-3 border fx-border-color p-3 fx-rounded cursor-pointer'>
                  <div className='pl-3 pr-3'>
                    <BlankIcon />
                  </div>
                  <div>
                    <p className='text-[15px] font-medium'>Continue With Blank Organization</p>
                    <p className='text-[14px] fx-label-color two-line-ellipsis mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur cupiditate voluptatem officia, voluptates, deserunt molestias architecto consequuntur reiciendis, illo itaque ad provident distinctio. Repellat velit inventore saepe optio incidunt provident perferendis fugit iusto eligendi commodi. Nihil in explicabo molestiae amet deleniti ab fugiat voluptate magni ratione. Sint eos sed praesentium!</p>
                  </div>
                </label>
                <input type="radio" id='template-blank' name='template-blank' className='hidden' />


                <p className='fx-label-color text-[15px] font-medium mt-5 mb-5'>Choose A Template</p>
                <label htmlFor="template-2" className='fx-flex-cl gap-3 border fx-border-color p-3 fx-rounded cursor-pointer'>
                  <div className='pl-3 pr-3'>
                    <CodeIcon/>
                  </div>
                  <div>
                    <p className='text-[15px] font-medium'>Software Development</p>
                    <p className='text-[14px] fx-label-color two-line-ellipsis mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur cupiditate voluptatem officia, voluptates, deserunt molestias architecto consequuntur reiciendis, illo itaque ad provident distinctio. Repellat velit inventore saepe optio incidunt provident perferendis fugit iusto eligendi commodi. Nihil in explicabo molestiae amet deleniti ab fugiat voluptate magni ratione. Sint eos sed praesentium!</p>
                  </div>
                </label>
                <input type="radio" id='template-2' name='template-ready-made' className='hidden' />
              </div>

            </div>

            <FxButton variant='primary' className='w-full p-3 font-medium mt-5 sticky bottom-3' radius='primary'>
              Create
            </FxButton>
          </div>
        </div>


      </div>

      {/* design */}
      <div className='w-full h-full border-r fx-border-color'>

      </div>
    </div>
  )
}


