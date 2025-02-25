'use client'
import AddToFavourite from '@/components/core/workspace/AddToFavourite';
import { FxButton } from '@/components/ui';
import { ForwardIcon } from '@/components/ui/icons/forward-icon';
import React from 'react'
import TextareaAutosize from "react-textarea-autosize";


export default function TablePage() {
  return (
    <section className='w-full'>
      <div className="table-header w-full shborder p-3 fx-flex-between-ic">
        <TextareaAutosize
          placeholder="Untitled"
          className="resize-none w-full appearance-none overflow-hidden outline-none bg-transparent text-[20px] text-white font-medium"
        />

        <div className='fx-flex-cr gap-3'>
          <AddToFavourite/>
          <FxButton variant='secondary' radius='tiny' className="p-2 h-[30px] fx-flex-center gap-1">
            <p className="fx-label-color">Share</p>
            <ForwardIcon />
          </FxButton>
        </div>
      </div>
      <div className='w-full'>
      </div>
    </section>
  )
}


