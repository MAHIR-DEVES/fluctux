import AppSidebar from '@/components/core/app/AppSidebar'
import React from 'react'

interface AppLayoutProps {
    children: React.ReactNode
}

export default function Layout({
    children
}: AppLayoutProps) {
  return (
    <section>
      <AppSidebar/>
      <main>
        {children}
      </main>
    </section>
  )
}


