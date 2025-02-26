"use client"
import useShowSuggestions from '@/app/hooks/useShowSuggestions';
import { FxButton, FxInput, FxRadio, TEAM_CATEGORIES, TEAM_VISIBILITY_OPTIONS } from '@/components/ui'
import FxSuggestionInput from '@/components/ui/fx-suggestion-input';
import { ArrowLeftSolidIcon } from '@/components/ui/icons';
import React from 'react'

export default function NewTeamPage() {
  const {activeIndex, handleKeyDown, handleShowAllSuggestions, handleSuggestionChange, filteredSuggestions, showSuggestions, inputValue, handleSelectSuggestion} = useShowSuggestions({data: TEAM_CATEGORIES})

  return (
    <div className='w-full fx-flex-center workspace-exclude-header'>
      <div className='max-w-[600px] w-full my-24 px-3'>
        <h1 className='text-[25px] font-semibold'>Create New Team</h1>
        <div className='mt-10'>
          <div>
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
            <FxRadio items={TEAM_VISIBILITY_OPTIONS} initialValue='public' activeLabelClass='border border-[var(--primary-color)] ' buttonType='modern' layoutClass="w-[250px]" closeMenuOnSelect={true} labelStyles='rounded-[5px] w-full h-[60px] pl-3 pr-3 hover:fx-third-bg' radius='tiny' align="start" buttonClass="w-fit px-3 py-2 gap-2 fx-flex-center font-medium" />
          </div>

          <FxButton variant='primary' className='w-full mt-7 py-2 font-medium fx-flex-center gap-2' radius='tiny'>
            <span>Create</span>
          </FxButton>

        </div>
      </div>
    </div>
  )
}
