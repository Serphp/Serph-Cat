import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from './components/Layout'
// Superbase
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
//
import UserContext from '../pages/Context/UserContext'
import CatContext from '../pages/Context/CatContext'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <>
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
    <UserContext>
      <CatContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CatContext>
    </UserContext>
    </SessionContextProvider>
    </>
  )
}
