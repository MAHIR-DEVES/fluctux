"use client"
import React from 'react'
import useToggleOpen from '@/app/hooks/useToggleOpen'
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch';
import FxCommandBox from '@/components/ui/fxcommandbox';
import FxButton from '@/components/ui/fxbutton';
import { SearchIcon } from '@/components/ui/icons/search-icon';
import { CommandKeyIcon } from '@/components/ui/icons/command-key-icon';
import { searchAlgolia } from '@/helpers/algolia/search.helper';
import { DOC_INDEX_NAME } from '@/services/constant';
import DocCustomRefinementList from '../algolia/doc-custom-refinement';

function Hit({ hit }) {
    return (
        <div>
            <ul>
                <li>
                <Highlight attribute="label" hit={hit} />
                </li>
            </ul>
        </div>
    )
  }

export default function DocSearchComponent() {
    const { isOpen: isSearchBoxOpen, setOpen: setSearchBoxOpen } = useToggleOpen({
        id: 'search-box',
        shortcutKey: 'k'
    })
    return <>
        <FxButton onClick={() => setSearchBoxOpen(true)} variant='secondary' className='pl-2 pr-2 h-[35px] fx-flex-between-ic gap-36 fx-third-bg' radius='tablet'>
            <div className='fx-flex-cl gap-3'>
                <SearchIcon />
                <span className='fx-sec-label-color'>Search documentation...</span>
            </div>
            <div className='fx-flex-cr pr-2 gap-1'>
                <CommandKeyIcon width={15} height={15} />
                <span className='text-[13px] fx-label-color'>Ctrl+k</span>
            </div>
        </FxButton>

        <FxCommandBox open={isSearchBoxOpen} className='max-w-[700px] h-[400px] w-full'>
            <div className='w-full h-[50px] border-b fx-border-color sticky top-0 left-0'>

            </div>
            <InstantSearch searchClient={searchAlgolia} indexName={DOC_INDEX_NAME}  >
                <SearchBox 
                  autoFocus={true}
                />
                <DocCustomRefinementList attribute='type'  />
                <Hits hitComponent={Hit} />
            </InstantSearch>
        </FxCommandBox>
    </>
}


