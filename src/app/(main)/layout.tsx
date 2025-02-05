import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <header className='fixed w-full bg-red-600 top-0 h-[50px] z-50 left-0'>
            header
        </header>
      {children}
    </div>
  )
}

