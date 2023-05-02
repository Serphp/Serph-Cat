import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/Layout'
import UserContext from '../pages/Context/UserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <UserContext>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </UserContext>
    </>
  )
}
