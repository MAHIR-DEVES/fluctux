"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { usePathname } from 'next/navigation'
import { useProcessMDX } from '@/app/hooks/useProcessMDX'
import { lessonKey } from './constant'
import { AngryIcon, ArrowLeftSolidIcon, GithubCircleIcon, RightArrowIcon, SadIcon, SmileIcon, SolidLineIcon, StarFaceIcon, TextAlignLeftIcon } from '@/components/ui/icons'
import { FxButton } from '@/components/ui'
import { useGetAnchors, useToggleOpen } from '@/app/hooks'

interface DocContentPropsType {
    data: string
}
export default function DocContent({ data }: DocContentPropsType) {
    const { content } = useProcessMDX(data)
    const { anchors } = useGetAnchors(content)
    const path_name = usePathname()
    const { prev, next } = useSelector((state: RootState) => state.docPaginate);
    const { isOpen: isDocOnPageOpen, setOpen: setDocOnPageOpen, toggle: toggleDocOnPageOpen } = useToggleOpen({
        id: "doc-on-the-page"
    })

    useEffect(() => {

        window.scrollTo({
            top: 0,
        });

        setDocOnPageOpen(false)
    }, [path_name])

    return <section className='fx-flex-ct gap-5 relative w-full h-full'>
        <div className='mt-[64px] pt-10 w-full'>
            <div className='w-fit mb-8'>
                <span className='fx-label-color font-medium'>
                    {path_name && path_name.split("/").slice(-3).map((segment, index, arr) =>
                        index === 0 && segment === "docs"
                            ? ""
                            : `${segment.replace(/^\d+-/, "").replace(/-/g, " ").replace(/^\w/, c => c.toUpperCase())}${index < arr.length - 1 ? " / " : ""}`
                    )}
                </span>
            </div>

            <article dangerouslySetInnerHTML={{ __html: content }} className="prose prose-gray dark:prose-invert w-full "></article>


            <div className='border-t mt-10 fx-border-color'>
                <div className='w-full fx-flex-center gap-2 mt-5 doc-pagination'>

                    {
                        prev &&

                        <Link href={`/docs/${prev?.path.replace("src/content/docs/", "").replace(".mdx", "")}`} className='w-full' onClick={() => {
                            localStorage.setItem(lessonKey, path_name)
                        }}>
                            <div className='w-full doc-paginate-btn h-[80px] border-none hover:fx-secondary-bg fx-rounded p-3 pt-0 pb-0 fx-flex-cl text-left flex-shrink-0 gap-2'>
                                <div className='fx-flex-cl'>
                                    <RightArrowIcon className='rotate-180' />
                                    <p className='fx-label-color font-medium text-[15px]'>Previous</p>
                                </div>
                                <p className='text-[var(--primary-color)] font-medium text-[16px] one-line-ellipsis'>{prev?.name.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/^\w/, (c: string) => c.toUpperCase()).replace(".mdx", "")}</p>
                            </div>
                        </Link>

                    }

                    {
                        next &&
                        <Link href={`/docs/${next?.path.replace("src/content/docs/", "").replace(".mdx", "")}`} className='w-full' onClick={() => {
                            localStorage.setItem(lessonKey, path_name)
                        }}>
                            <div className='w-full doc-paginate-btn h-[80px] border-none hover:fx-secondary-bg fx-rounded p-3 pt-0 pb-0 fx-flex-cr text-right flex-shrink-0 gap-2'>
                                <div className='fx-flex-cr'>
                                    <p className='fx-label-color font-medium text-[15px]'>Next</p>
                                    <RightArrowIcon />
                                </div>
                                <p className='text-[var(--primary-color)] font-medium text-[16px] one-line-ellipsis'>{next?.name.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/^\w/, (c: string) => c.toUpperCase()).replace(".mdx", "")}</p>

                            </div>
                        </Link>
                    }
                </div>

                {
                    data !== "404: Not Found" &&
                    <div className='w-full mt-5 border fx-rounded fx-border-color p-3 fx-flex-between-ic gap-3 edit-page-github'>
                        <div className='max-w-[500px] w-full'>
                            <h4 className='fx-label-color text-[16px] font-medium'>Edit this page on Github?</h4>
                            <p className='fx-sec-label-color text-[14px] font-medium pt-2'>If you find any mistakes or areas that need updating, feel free to edit and contribute improvements to the documentation!</p>
                        </div>
                        <Link href={`https://github.com/gitmahin/fluctux/tree/main/src/content${path_name}.mdx`} target='_blank' className='edit-page-github-btn'>
                            <FxButton variant='secondary' radius='primary' size='md' className='fx-flex-center gap-2 edit-page-github-btn'>

                                <span className='font-medium'>Edit</span>
                                <GithubCircleIcon />
                            </FxButton>
                        </Link>
                    </div>
                }

                {
                    data !== "404: Not Found" &&
                    <div className='w-full fx-flex-center mt-5'>
                        <div className='border fx-border-color rounded-[50px] p-1 gap-2 fx-flex-center w-fit fx-secondary-bg'>
                            <span className='fx-sec-label-color text-[14px] font-medium ml-2'>Was this helpful?</span>
                            <div className='fx-flex-center w-fit'>
                                <span className='rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer fx-secondary-hover-bg hover:border fx-border-color'>
                                    <StarFaceIcon />
                                </span>
                                <span className='rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer fx-secondary-hover-bg hover:border fx-border-color'>
                                    <SmileIcon />
                                </span>
                                <span className='rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer fx-secondary-hover-bg hover:border fx-border-color'>
                                    <SadIcon />
                                </span>
                                <span className='rounded-[50%] w-[35px] h-[35px] fx-flex-center cursor-pointer fx-secondary-hover-bg hover:border fx-border-color'>
                                    <AngryIcon />
                                </span>
                            </div>

                        </div>
                    </div>
                }
            </div>
        </div>

        <aside className={`w-[220px] sticky top-0 h-screen flex-shrink-0 text-[15px] doc-on-this-page-aside ${isDocOnPageOpen && "doc-onthispage-aside-open"}`}>
            <div onClick={toggleDocOnPageOpen} className={`w-[15px] hidden absolute left-0 top-0 h-screen justify-center items-center doc-aside-onpage-toggle-btn`}>
                <SolidLineIcon className={`absolute ${isDocOnPageOpen && "hidden"}`} width={34} height={34} />
                <ArrowLeftSolidIcon className={`absolute rotate-180 ${!isDocOnPageOpen && "hidden"} `} />
            </div>
            <nav className='h-[calc(100%-105px)] sticky top-[105px] overflow-y-auto custom-scrollbar doc-hide-scrollbar hover:doc-hide-scrollbar-show pb-16 doc-on-this-page-aside-container'>
                <div className='fx-flex-cl gap-2 sticky top-0 fx-primary-bg pb-1'>
                    <TextAlignLeftIcon width={15} height={15} />
                    <h3 className='font-medium'>On this page</h3>
                </div>

                <ul className='fx-label-color leading-7'>
                    {
                        anchors.map((item, i) => {
                            return <Link href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} key={i} className='dark:hover:text-white hover:text-black'>
                                <li onClick={() => setDocOnPageOpen(false)} className='one-line-ellipsis'>{item}</li>
                            </Link>

                        })
                    }

                </ul>
            </nav>
        </aside>
    </section>
}

