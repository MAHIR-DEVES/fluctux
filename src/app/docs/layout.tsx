import { Footer } from '@/components/core'
import DocHeader from '@/components/core/docs/doc-header'
import React from 'react'

interface DocParentLayoutPropsType {
  children: React.ReactNode
}

export default function Layout({ children }: DocParentLayoutPropsType) {
  return (
    <>
      <DocHeader />
      {children}
      <Footer />
    </>
  )
}


