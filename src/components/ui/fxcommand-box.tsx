"use client"
import React from 'react'
import {
    CommandDialog,
} from "@/components/ui/command"

interface FxCommandBoxProps {
    children?: React.ReactNode
    open?: boolean,
    className?: string,
    containerClasses?: string
}


export function FxCommandBox({ children, open, className, containerClasses }: FxCommandBoxProps) {
    return <CommandDialog open={open} className={`bg-transparent border-none p-[0px] ${className}`}>
        <div className={`border fx-border-color rounded-[10px] fx-secondary-bg h-full w-full relative overflow-hidden ${containerClasses}`}>
            {children}
        </div>
    </CommandDialog>
}


