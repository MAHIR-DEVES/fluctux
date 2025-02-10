"use client"
import React, { useCallback, useEffect, useRef } from 'react'
import FxRadio from '@/components/ui/fxradio'
import { DOC_TYPE } from '@/components/ui/constant'
import FxFavIcon from '@/components/ui/fxfav'
import { usePathname, useRouter } from 'next/navigation'
import FxButton from '@/components/ui/fxbutton'
import useToggleOpen from '@/app/hooks/useToggleOpen'
import Link from 'next/link'
import { RightArrowIcon } from '@/components/ui/icons/right-arrow-icon'
import { DocNavListType } from '@/types/doc.types'
import { useDispatch } from 'react-redux'
import { setPagination } from '@/redux/pagination/docPaginateSlice'
import { FLUCTUX_VERSION } from '@/constants/fluctux-version'
import { SolidLineIcon } from '@/components/ui/icons/solid-line-icon'
import { ArrowLeftSolidIcon } from '@/components/ui/icons/arrow-left-solid-icon'
import { lessonKey } from './constant'


interface DocSidebarPropsType {
    docType: string,
    data: {
        docNavList: DocNavListType[]
    }
}

export default function DocSidebar({ docType, data }: DocSidebarPropsType) {
    const path_name = usePathname()
    const { handleOpenArray, isOpenFromArray } = useToggleOpen({})
    const { isOpen: isDocAsideOpen, setOpen: setDocAsideOpen, toggle: docAsideToggleOpen } = useToggleOpen({
        id: "doc-aside"
    })
    const router = useRouter()
    const dispatch = useDispatch()

    const chapterKey = "chapter" ;

    

    const lessons = useRef<{ [key: string]: HTMLAnchorElement | null }>({});


    const handleDocTypeChange = useCallback((value: string) => {
        router.push(`/docs/${value}/01-get-started/01-introduction`)
    }, [router])

    // Flatten the docNavList into a single list (excluding directories)
    const flattenDocs = useCallback((list: DocNavListType[]): DocNavListType[] => {
        return list.flatMap((item) =>
            item.type === "dir"
                ? flattenDocs(item.docNavTreeList || [])
                : [item]
        );
    }, [])


    useEffect(() => {

        setDocAsideOpen(false)

        const flatDocList = flattenDocs(data.docNavList);

        // Find current document index
        const currentIndex = flatDocList.findIndex((navItem) =>
            path_name.endsWith(navItem.path.replace("src/content/docs/", "").replace(".mdx", ""))
        );
        if (currentIndex !== -1) {
            dispatch(setPagination({ currentIndex, flatDocList }));
        } else {
            // If the document is not found, reset pagination state
            dispatch(setPagination({ currentIndex: -1, flatDocList: [] }));
        }

    }, [dispatch, flattenDocs, data.docNavList, path_name, handleDocTypeChange]);



    const handleOpenChapter = (index: number) => {
        console.log("rendering chapter");
        
        handleOpenArray(`${index}`)
        const storedChapters = JSON.parse(localStorage.getItem(chapterKey) || '[]');
        if (!isOpenFromArray(`${index}`)) {
            // Add the index if it's not present
            const updatedChapters = [...storedChapters, index];
            localStorage.setItem(chapterKey, JSON.stringify(updatedChapters));
        } else {
            // Remove the index if it's already present
            const updatedChapters = storedChapters.filter((ch: number) => ch !== index);
            localStorage.setItem(chapterKey, JSON.stringify(updatedChapters));
        }
    }

    useEffect(() => {
        const storedChapters = JSON.parse(localStorage.getItem(chapterKey) || '[]');
        if(!Array.isArray(storedChapters)) return
        storedChapters && storedChapters.map((item: number) => handleOpenArray(`${item}`) )
    }, [data])


    useEffect(() => {
        const lesson = localStorage.getItem(lessonKey);
        if (lesson && lessons.current[lesson]) {

            setTimeout(() => {
                lessons.current[lesson]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500);
        }
    }, [data, path_name])

    return <>
        <aside className={`w-[250px] h-screen sticky top-0 fx-primary-bg flex-shrink-0 doc-aside-nav transition-all duration-150 ease-out ${isDocAsideOpen ? "left-0" : " doc-aside-nav-off"}`}>
            <div onClick={docAsideToggleOpen} className={`w-[15px] hidden absolute right-0 top-0 h-screen justify-center items-center doc-aside-toggle-btn`}>

                <SolidLineIcon className={`absolute ${isDocAsideOpen && "hidden"}`} width={34} height={34} />
                <ArrowLeftSolidIcon className={`absolute ${!isDocAsideOpen && "hidden"} `} />
            </div>
            <nav className='h-[calc(100%-105px)] sticky top-[105px] overflow-y-scroll custom-scrollbar pr-2 pb-16 doc-aside-nav-container'>

                <FxButton variant='secondary' className='w-full fx-flex-cl gap-2 p-2 mb-3 ' radius='primary' >
                    <div className='p-2 rounded-[5px] border fx-primary-purple-border-50'>
                        <FxFavIcon size='sm' variant='default' />
                    </div>
                    <div className='text-left'>
                        <p className='font-medium'>Fluctux</p>
                        <p className='fx-sec-label-color text-[13px]'>v{FLUCTUX_VERSION}</p>
                    </div>
                </FxButton>

                <FxRadio onValueChange={handleDocTypeChange} align='start' alignItems='vertical' buttonType='modern' buttonClass='fx-flex-cl rounded-[8px] gap-2 mb-3 p-2 w-full fx-secondary-bg sticky top-[0px] z-10 font-medium' items={DOC_TYPE} layoutClass='w-[230px]' activeLabelClass='hover:bg-[var(--primary-purple-transparent)_!important] bg-[var(--primary-purple-transparent)]' labelStyles='w-full rounded-[5px] hover:fx-third-bg' initialValue={`${docType}`} closeMenuOnSelect={true} labelIconContainerClass={"fx-primary-purple-border-50 p-2 rounded-[5px] fx-primary-purple-transparent-bg"} buttonSvgContainerClass={'fx-primary-purple-border-50 border p-2 rounded-[5px] fx-primary-purple-transparent-bg'} showDescInButton={true} />
                {
                    data.docNavList.map((navItem, i) => {
                        return <React.Fragment key={i}>

                            {
                                navItem.type === "dir" ?
                                    <button className={`font-medium mb-2 hover:fx-secondary-bg w-full fx-flex-between-ic p-1 pl-2 pr-2 rounded-[5px] fx-label-color ${isOpenFromArray(`${i}`) && "fx-secondary-bg text-[var(--foreground)_!important]"} ${path_name.includes(navItem.path.split("/").slice(-1).toString()) && "text-[var(--primary-color)_!important]"}`} onClick={() => handleOpenChapter(i)}>
                                        <span>{navItem.name.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}</span>
                                        <RightArrowIcon className={`${isOpenFromArray(`${i}`) ? "rotate-90" : "rotate-0"} transition-all duration-150`} />
                                    </button>
                                    : <Link key={i} href={`/docs/${navItem.path.replace("src/content/docs/", "").replace(".mdx", "")}`}>

                                        <button className={`font-medium mb-2 hover:fx-primary-purple-transparent-bg w-full fx-flex-between-ic p-1 pl-2 pr-2 rounded-[5px]  ${path_name.endsWith(`${navItem.name.replace(".mdx", "")}`) && "fx-primary-purple-transparent-bg text-[var(--primary-color)]"}`} onClick={() => handleOpenArray(`${i}`)}>
                                            <span>{navItem.name.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()).replace(".mdx", "")}</span>

                                        </button>
                                    </Link>
                            }

                            <div className={`ml-2 flex flex-col border-l fx-border-color fx-label-color font-medium transition-all duration-200 ${isOpenFromArray(`${i}`) ? "max-h-fit mt-3 mb-3 translate-y-0" : "max-h-0 opacity-0 translate-y-[-20px]"} overflow-hidden origin-top`}>
                                {
                                    navItem.docNavTreeList?.map((navTreeItem, j) => {
                                        const slug = `/docs/${navTreeItem.path.replace("src/content/docs/", "").replace(".mdx", "")}`
                                        return <Link key={j} ref={el => { lessons.current[slug] = el }} href={slug} className={`p-1 pl-5 pr-0 dark:hover:text-white hover:text-black relative ${path_name.endsWith(`${navTreeItem.name.replace(".mdx", "")}`) && "text-[var(--foreground)]"}`} onClick={() => {
                                            localStorage.setItem(lessonKey, slug)
                                        }}>
                                            <span>{navTreeItem.name.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()).replace(".mdx", "")}</span>
                                            {
                                                path_name.endsWith(`${navTreeItem.name.replace(".mdx", "")}`) &&
                                                <span className='absolute left-0 top-0 h-full w-[4px] fx-primary-purple-bg rounded-tr-[50px] rounded-br-[50px]'></span>
                                            }
                                        </Link>
                                    })
                                }
                            </div>
                        </React.Fragment>
                    })
                }
            </nav>
        </aside>
    </>
}


