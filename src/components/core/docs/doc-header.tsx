"use client"
import React, { useEffect } from 'react'
import DocSearchComponent from './search/doc-search'
import useToggleOpen from '@/app/hooks/useToggleOpen'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FxButton, FxLogo, FxSeparator } from '@/components/ui'
import { CancelIcon, GithubCircleIcon, MenuTwoBarIcon } from '@/components/ui/icons'

export default function DocHeader()  {
    const path_name = usePathname()
    const { isOpen: isDocHeaderMenuOpen, setOpen: setDocHeaderMenuOpen, toggle: toggleDocHeaderMenu } = useToggleOpen({
        id: "doc-header-menu"
    })

    useEffect(() => {
        setDocHeaderMenuOpen(false)
    }, [path_name])

    return <header className='fixed w-full h-[64px] fx-secondary-bg border-b fx-border-color fx-flex-between-ic pl-3 pr-3 z-50 docs-header'>
        <div className='fx-flex-cl gap-3 doc-header-logo'>
            <FxLogo className='w-[90px]' variant="default" />
            <FxSeparator orientation='vertical' size='30px' />
            <span className='fx-label-color text-[20px] font-medium'>Docs</span>
        </div>
        <DocSearchComponent />
        <div className={`fx-flex-cr gap-3 doc-header-menu transition-all duration-150 ease-out ${isDocHeaderMenuOpen ? "right-0" : "right-[-155px]"}`}>
            <FxButton onClick={toggleDocHeaderMenu} className='w-[35px] h-[35px] rounded-[50%] flex-shrink-0 border-none bg-transparent hidden hover:fx-secondary-bg doc-header-menu-btn'>
                <MenuTwoBarIcon className={`${isDocHeaderMenuOpen && "hidden"}`} />
                <CancelIcon className={`${!isDocHeaderMenuOpen && "hidden"}`} />
            </FxButton>

            <GithubCircleIcon width={35} height={35} color='var(--foreground)' />
            <Link href={"/login"}>
                <FxButton variant='primary' className='w-[100px] h-[35px] fx-flex-center font-medium text-white' radius='tablet'>
                    Sign in
                </FxButton>
            </Link>

            {/* auth by session */}
            {/* <div className='group hover:outline outline-[3px] cursor-pointer outline-[var(--secondary-hover-bg)]  w-[35px] h-[35px] overflow-hidden rounded-[50%] flex-shrink-0'>

          <Image src={""} width={250} height={250} alt='Profile' className='object-cover object-center w-full h-full  border fx-border-color  ' />
      </div> */}

        </div>


    </header>
}


