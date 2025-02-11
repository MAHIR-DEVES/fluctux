import Image from 'next/image'
import React from 'react'
import PRIMARY_LOGO from '../../../public/fluctux-logo-transparent.png'

export const Header = () => {
    return <header className="w-full h-[64px] border-b fx-border-color fixed top-0 left-0 z-50 main-header fx-secondary-bg fx-flex-center pl-3 pr-3">
        <div className='fx-flex-between-ic fx-default-layout'>
            <div>
                <Image src={PRIMARY_LOGO} width={500} height={500} priority alt='Fluctux' className='h-[30px] object-contain object-center w-fit' />
            </div>
        </div>
    </header>
}


