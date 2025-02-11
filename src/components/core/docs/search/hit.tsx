"use client"

import { GridIcon, RightArrowIcon } from '@/components/ui/icons';
import Link from 'next/link';
import { Highlight } from 'react-instantsearch';

interface HitProps {
    hit: {
        label: string;
        slug: string;
        objectID: string;
        __position: number;
        __queryID: string
    };
}

export default function Hit({ hit }: HitProps) {
    return (

        <div className='pl-3 pr-3  w-full pt-2'>
            <Link href={`/docs/${hit.slug}`} className='w-full'>

                <li className='w-full p-4 pt-3 pb-3 fx-third-bg fx-rounded fx-flex-between-ic gap-2  font-medium fx-secondary-hover-bg group'>
                    <div className='fx-flex-cl gap-4'>

                        <div className='flex-shrink-0 w-[30px] h-[30px] border rounded-[5px] fx-flex-center fx-border-color'>
                            <GridIcon width={15} height={15} />
                        </div>
                        <div>

                            <p className='text-[13px] pb-1 fx-sec-label-color group-hover:fx-label-color'>{hit.slug.split("/")[0].replace(/^\w/, c => c.toUpperCase())} / {hit.slug.split("/")[1].replace(/^\d+-/, '').replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}</p>
                            <div className='fx-label-color group-hover:text-[var(--foreground)] text-[15px]'>

                                <Highlight classNames={
                                    {
                                        highlighted: "bg-transparent text-[var(--primary-color)]"
                                    }
                                } attribute="label" hit={hit} />
                            </div>
                        </div>
                    </div>
                    <RightArrowIcon/>
                </li>
            </Link>
        </div>

    )
}