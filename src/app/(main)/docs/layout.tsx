import React from 'react'
interface DocLayoutPropsType {
    children: React.ReactNode
}

export default function Layout({
    children
}: DocLayoutPropsType) {
  return (
    <div>
      
      <section>
        {children}
      </section>
    </div>
  )
}


