/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import { Inter } from 'next/font/google'
import ApiCat from './api/ApiCat'
// Superbase
//import { Auth } from '@supabase/auth-ui-react'
//import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
//import Account from './components/Account'
//import Avatar from '../pages/components/Avatar'

export default function Home() {
  //const session = useSession()
  //const supabase = useSupabaseClient()

  return (
    <>

    <section className='catconteiner'>
      <div className='catleft'>
      <h1 className='text-6xl font-bold text-center'> Login </h1>
      <button className='catbutton'><a href='/cats'> Entrar </a></button>
      </div>
      <div className='catright'>
        <h1 className='text-6xl font-bold text-center'> Los michitos </h1>
        <button className='catbutton'><a href='/cats'> Entrar </a></button>
      </div>
    </section>
    <section className='flex flex-row items-center justify-center py-2'>

      <div className='flex flex-wrap items-center justify-around max-w-4xl mt-5 sm:w-full'>
        <a href='/Profile ' className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'>
          <h3 className='text-2xl font-bold'> Login &rarr;</h3>
          <p className='mt-4 text-xl'>
            Ingresa a tu cuenta para ver tus gatos.
          </p>
        </a>
        </div>

        <div className='flex flex-wrap items-center justify-around max-w-4xl mt-5 sm:w-full'>
        
          <h3 className='text-2xl font-bold'>Home &rarr;</h3>
          <p className='mt-4 text-xl'>
            Mundo Gatuno
          </p>
        </div>
    </section>
    </>
  )
}
