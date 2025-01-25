import React from 'react'

interface GlobalLayoutPropsType {
    children: React.ReactNode
}

export default function Layout({ children }: GlobalLayoutPropsType) {
    return (
        <div>
            {children}
        </div>
    )
}


