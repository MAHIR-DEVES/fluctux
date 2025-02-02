"use client"
import React from 'react'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

interface ReduxProviderPropsType {
    children: React.ReactNode
}

export default function ReduxProvider({ children }: ReduxProviderPropsType) {
    return <Provider store={store}>
        {children}
    </Provider>
}


