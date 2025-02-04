"use client"
import React, { useEffect } from 'react'
import useToggleOpen from '@/app/hooks/useToggleOpen'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';
import FxCommandBox from '@/components/ui/fxcommandbox';
import FxButton from '@/components/ui/fxbutton';
import { SearchIcon } from '@/components/ui/icons/search-icon';
import { CommandKeyIcon } from '@/components/ui/icons/command-key-icon';
import { searchAlgolia } from '@/helpers/algolia/search.helper';
import { DOC_INDEX_NAME } from '@/services/constant';
import DocCustomRefinementList from '../../algolia/doc-custom-refinement';
import Hit from './hit';
import NoResultsBoundary from './no-results-boundary';
import NoResults from './no-results';
import { usePathname } from 'next/navigation';


export default function DocSearchComponent() {
    const { isOpen: isSearchBoxOpen, setOpen: setSearchBoxOpen } = useToggleOpen({
        id: 'search-box',
        shortcutKey: 'k'
    })

    const path_name = usePathname()

    useEffect(() => {
        setSearchBoxOpen(false)
    }, [path_name])

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

        <FxCommandBox
            open={isSearchBoxOpen}
            className='max-w-[700px] h-[500px] w-full'
        >
            <FxButton onClick={() => setSearchBoxOpen(false)} className='absolute right-[10px] top-[10px] z-10 fx-label-color font-medium text-[14px]' variant='secondary' size='sm' radius='primary' >
                esc
            </FxButton>
            <InstantSearch
                searchClient={searchAlgolia}
                indexName={DOC_INDEX_NAME}
            >
                <div className='w-full h-[50px] border-b fx-border-color sticky top-0 left-0 fx-flex-center flex-shrink-0'>

                    <SearchBox
                        placeholder='Search documentation...'
                        autoFocus={true}
                        className='w-full'
                        classNames={{
                            form: "bg-transparent flex flex-row-reverse gap-2 w-full h-full pl-2 pr-2 border-none",
                            input: "bg-transparent w-full h-[45px] border-none outline-none fx-flex-cl pr-[35px]",
                            loadingIndicator: "hidden",
                            loadingIcon: "hidden",
                            reset: "hidden",

                        }}
                        submitIconComponent={
                            () => <SearchIcon />
                        }


                    />
                </div>

                <NoResultsBoundary fallback={<NoResults />}>
                    <div className='w-full border-b fx-border-color sticky top-[50px] left-0 h-[70px] fx-flex-cl flex-shrink-0'>
                        <DocCustomRefinementList sortBy={['name']} attribute='type' />
                    </div>

                    <div className='overflow-y-auto pb-3'>
                        <Hits hitComponent={Hit} />
                    </div>
                </NoResultsBoundary>
            </InstantSearch>
        </FxCommandBox>
    </>
}


