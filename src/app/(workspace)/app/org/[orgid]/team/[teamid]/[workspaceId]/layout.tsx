import MainSidebar from '@/components/core/workspace/sidebars/main-sidebar'
import React from 'react'

interface LayoutPropsType {
  children: React.ReactNode,
  params: Promise<{ workspaceId: string }>
}

export default async function Layout({
  children,
  params
}: LayoutPropsType) {
  const { workspaceId } = await params
  return (
    <div className='workspace-exclude-header flex justify-between items-start h-screen'>

      <MainSidebar />

      <div className='w-full h-[5000px] pl-[280px]'>
        <div className='w-full p-5'>

        {workspaceId}
        {children}
        </div>
      </div>
    </div>
  )
}


