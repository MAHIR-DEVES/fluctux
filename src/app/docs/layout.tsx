
import { DocHeader } from '@/components/core/docs'
import Footer from '@/components/core/Footer'
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


