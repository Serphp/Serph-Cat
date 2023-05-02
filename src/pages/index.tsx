
import { Inter } from 'next/font/google'
import ApiCat from './api/ApiCat'
// Superbase
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from './components/Account'
import Avatar from '../pages/components/Avatar'

export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-6xl font-bold'> Proyect Cat </h1>

{/* 
          <ApiCat /> */}
    </div>
    </>
  )
}
