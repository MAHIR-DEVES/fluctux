"use client"
import { useImagePreview, useShowSuggestions } from '@/app/hooks';
import { FxButton, FxInput, FxPopupRadio, FxSuggestionInput } from '@/components/ui'
import { ArrowLeftSolidIcon, DeleteIcon, ImageIcon } from '@/components/ui/icons';
import { TEAM_CATEGORIES, TEAM_VISIBILITY_OPTIONS } from '@/constants/workspace';
import Image from 'next/image';
import React from 'react'

export default function NewTeamPage() {
  const { activeIndex, handleKeyDown, handleShowAllSuggestions, handleSuggestionChange, filteredSuggestions, showSuggestions, inputValue, handleSelectSuggestion } = useShowSuggestions({ data: TEAM_CATEGORIES })

  const { imagePreview, handleRemoveImage, handleImageChange } = useImagePreview()

  return (
    <div className='w-full fx-flex-center workspace-exclude-header'>
      <div className='max-w-[600px] w-full my-24 px-3'>
        <h1 className='text-[25px] font-semibold'>Create New Team</h1>
        <div className='mt-5'>
          <div>
            <label htmlFor="team-cover-image">
              <div className='w-full fx-flex-center cursor-pointer relative border fx-border-color h-[120px] rounded-t-[10px] overflow-hidden'>
                {imagePreview ? (
                  <>
                    <Image src={imagePreview} width={600} height={200} alt='team' className='object-cover object-center w-full h-full' />
                    <FxButton onClick={(e) => {
                      e.preventDefault()
                      handleRemoveImage()
                    }} variant='secondary' className='absolute bottom-2 right-2 w-[30px] h-[30px] fx-flex-center' radius="circle">
                      <DeleteIcon width={16} height={16} />
                    </FxButton>
                  </>
                )
                  : <ImageIcon width={24} height={24} />
                }
              </div>
            </label>
            <input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} alt="upload" id='team-cover-image' className='hidden' />

            <label htmlFor="team-logo" className="relative" >
              <div className='border fx-flex-center cursor-pointer absolute -top-[40px] left-5 fx-secondary-bg fx-border-color rounded-[8px] w-[80px] h-[80px]'>
                <ImageIcon width={24} height={24} />
              </div>
            </label>
            <input type="file" accept="image/png, image/jpeg" alt="upload" id='team-logo' className='hidden' />
          </div>

          <div className='mt-20'>
            <FxInput variant='outline' label='Team Name' className='w-full px-4 py-3 placeholder:fx-sec-label-color' radius='tiny' placeholder='e.g. My Team' />
          </div>

          <div className='mt-7 relative'>
            <FxInput variant='outline' label='Team Category' className='w-full px-4 py-3 placeholder:fx-sec-label-color' radius='tiny' placeholder='e.g. Software Team' value={inputValue} onChange={handleSuggestionChange} onKeyDown={handleKeyDown} />

            <FxButton onClick={handleShowAllSuggestions} variant='secondary' radius='circle' className={`rotate-[270deg] w-[30px] h-[30px] fx-flex-center absolute right-3 top-[50%] translate-y-[-50%] ${filteredSuggestions?.length > 0 && showSuggestions && "fx-primary-purple-bg fx-hover-primary-purple-bg"} `}>
              <ArrowLeftSolidIcon />
            </FxButton>

            {/* Suggestions Dropdown */}
            <FxSuggestionInput showSuggestions={showSuggestions} filteredSuggestions={filteredSuggestions || []} onSelect={handleSelectSuggestion} activeIndex={activeIndex} />

          </div>

          <div className='mt-7'>
            <FxPopupRadio
              items={TEAM_VISIBILITY_OPTIONS}
              initialValue='public'
              classNames={{
                activeLabel: 'border border-[var(--primary-color)]',
                layout: "w-[250px]",
                label: 'rounded-[5px] w-full h-[60px] pl-3 pr-3 hover:fx-third-bg',
                button: "w-fit px-3 py-2 gap-2 fx-flex-center font-medium"
              }}
              buttonType='modern'
              closeMenuOnSelect={true}
              radius='tiny'
              align="start"

            />
          </div>

          <FxButton variant='primary' className='w-full mt-7 py-2 font-medium fx-flex-center gap-2' radius='tiny'>
            <span>Create</span>
          </FxButton>

        </div>
      </div>
    </div>
  )
}
