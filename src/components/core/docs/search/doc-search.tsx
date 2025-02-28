"use client"
import React, { useEffect } from 'react'
import { InstantSearch, SearchBox } from 'react-instantsearch';
import { searchAlgolia } from '@/helpers/algolia/search.helper';
import { DOC_INDEX_NAME } from '@/services/constant';
import DocCustomRefinementList from './doc-custom-refinement';
import Hit from './hit';
import NoResultsBoundary from './no-results-boundary';
import NoResults from './no-results';
import { usePathname } from 'next/navigation';
import { InfiniteHits } from './infinite-hit';
import { FxButton, FxCommandBox } from '@/components/ui';
import { CommandKeyIcon, SearchIcon } from '@/components/ui/icons';
import { useToggleOpen } from '@/app/hooks';


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
        <FxButton onClick={() => setSearchBoxOpen(true)} variant='secondary' className='pl-2 pr-2 h-[35px] fx-flex-between-ic gap-36 fx-third-bg doc-search-button' radius='tablet'>
            <div className='fx-flex-cl gap-3 desktop-doc-search'>
                <SearchIcon />
                <span className='fx-sec-label-color'>Search documentation...</span>
            </div>
            <div className='fx-flex-cr pr-2 gap-1 desktop-doc-search'>
                <CommandKeyIcon width={15} height={15} />
                <span className='text-[13px] fx-label-color'>Ctrl+k</span>
            </div>
            <div className='hidden mobile-doc-search'>
                <SearchIcon />
            </div>
        </FxButton>

        <FxCommandBox
            open={isSearchBoxOpen}
            className='max-w-[700px] h-[500px] w-full p-2'
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
                    <div className='w-full border-b fx-border-color sticky top-[50px] left-0 h-[70px] fx-flex-cl flex-shrink-0 z-10'>
                        <DocCustomRefinementList sortBy={['name']} attribute='type' />
                    </div>
                    <div className='h-full'>

                    <div className='overflow-y-auto h-[calc(100%-120px)] pb-3 bg-transparent border-none'>
                        <InfiniteHits hitComponent={Hit} />
                    </div>
                    </div>
                </NoResultsBoundary>
            </InstantSearch>
        </FxCommandBox>
    </>
}


