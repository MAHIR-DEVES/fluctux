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


export default function FxCommandBox({children, open, className}: FxCommandBoxProps) {
    return (<div>
        <CommandDialog open={open}>
            <div className={`h-[400px] fx-primary-bg border fx-border-color w-full rounded-[10px] overflow-hidden ${className}`}>
                {children}
            </div>
        </CommandDialog>
    </div>
    )
}


