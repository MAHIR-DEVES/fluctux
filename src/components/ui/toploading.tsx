import React from 'react'

export function TopLoading() {
    return (
        <div className='fixed top-0 left-0 w-full z-[9999999999] h-[4px] bg-transparent'>
            <div className='top-loader bg-[var(--primary-color)] h-full'>
            </div>
        </div>
    )
}


