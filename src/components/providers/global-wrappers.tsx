"use client"
import React from 'react'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react";
import { useTheme } from 'next-themes';
import { Toaster, ToasterProps } from "sonner";
import { apolloClient } from '@/lib/apollo-client'
import { ApolloProvider } from '@apollo/client'

interface GlobalWrapperPropsType {
    children: React.ReactNode
}

export default function GlobalWrappers({
    children
}: GlobalWrapperPropsType) {
    const { theme = "system" } = useTheme()
    return (
        <SessionProvider>
            <ApolloProvider client={apolloClient}>
                <Provider store={store}>
                    {children}
                    <Toaster richColors theme={theme as ToasterProps["theme"]} closeButton />
                </Provider>
            </ApolloProvider>
        </SessionProvider>
    )
}


