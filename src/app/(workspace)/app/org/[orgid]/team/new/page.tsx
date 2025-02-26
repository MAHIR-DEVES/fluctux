"use client"
import { FxButton, FxInput, FxRadio, TEAM_CATEGORIES, TEAM_VISIBILITY_OPTIONS } from '@/components/ui'
import { ArrowLeftSolidIcon } from '@/components/ui/icons';
import React, { useState } from 'react'

export default function NewTeamPage() {
  const [inputValue, setInputValue] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<string[] | null>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter categories based on input
    if (value) {
      const filtered = TEAM_CATEGORIES.filter((category: string) =>
        category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCategories(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredCategories([]);
      setShowSuggestions(false);
    }

  };

  const handleSelectCategory = (category: string) => {
    setInputValue(category);
    setShowSuggestions(false); // Hide dropdown
  };

  const handleShowAllCategories = () => {
    setShowSuggestions(!showSuggestions)
    setFilteredCategories(TEAM_CATEGORIES)
  }

  return (
    <div className='w-full fx-flex-center workspace-exclude-header'>
      <div className='max-w-[600px] w-full my-24 px-3'>
        <h1 className='text-[25px] font-semibold'>Create New Team</h1>
        <div className='mt-10'>
          <div>

            <FxInput variant='outline' label='Team Name' className='w-full px-4 py-3 placeholder:fx-sec-label-color' radius='tiny' placeholder='e.g. My Team' />
          </div>

          <div className='mt-7 relative'>


            <FxInput variant='outline' label='Team Category' className='w-full px-4 py-3 placeholder:fx-sec-label-color' radius='tiny' placeholder='e.g. Software Team' value={inputValue} onChange={handleCategoryChange} />

            <FxButton onClick={handleShowAllCategories} variant='secondary' radius='circle' className='rotate-[270deg] w-[30px] h-[30px] fx-flex-center absolute right-3 top-[50%] translate-y-[-50%]'>
              <ArrowLeftSolidIcon/>
            </FxButton>

            {/* Suggestions Dropdown */}
            {showSuggestions && filteredCategories && filteredCategories.length > 0 && (
              <ul className="absolute w-[250px] border fx-border-color fx-secondary-bg shadow-lg mt-1 rounded-md z-10 max-h-[300px] overflow-y-auto">
                {filteredCategories?.map((category: string) => (
                  <li
                    key={category}
                    className="px-4 py-2 hover:fx-third-bg cursor-pointer fx-label-color hover:text-[var(--foreground)]"
                    onClick={() => handleSelectCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
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
