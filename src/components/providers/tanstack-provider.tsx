'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface TanstackProviderProps {
  children: React.ReactNode
} 

export function TanstackProvider({ children }: TanstackProviderProps) {

  const [queryClient] = useState(() => new QueryClient())

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}