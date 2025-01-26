import FxButton from '@/components/ui/fxbutton'
import { HouseTwoIcon } from '@/components/ui/icons/house-two-icon'
import React from 'react'

const page = () => {
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

      </section>

    </>
  )
}

export default page
