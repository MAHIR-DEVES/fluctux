"use client"
import React from 'react'
import {
    CommandDialog,
} from "@/components/ui/command"

interface FxCommandBoxProps {
    children?: React.ReactNode
    open?: boolean,
    className?: string
}


export default function FxCommandBox({ children, open, className }: FxCommandBoxProps) {
    return <CommandDialog open={open} className={`fx-secondary-bg border fx-border-color rounded-[10px] p-[0px] ${className}`}>
                {children}
        </CommandDialog>
   
 
}


