import { apolloClient } from '@/lib/apollo-client'
import { ApolloProvider } from '@apollo/client'
import React from 'react'

interface ApolloClientProviderPropsType {
    children: React.ReactNode
}

export default function ApolloClientProvider({ children }: ApolloClientProviderPropsType) {
    return <ApolloProvider client={apolloClient}>
        {children}
    </ApolloProvider>
}


