

import ApiCat from './api/ApiCat'
// Superbase
//import { Auth } from '@supabase/auth-ui-react'
//import { ThemeSupa } from '@supabase/auth-ui-shared'

//import Account from './components/Account'
//import Avatar from '../pages/components/Avatar'

export default function Home() {
  //const session = useSession()
  //const supabase = useSupabaseClient()

  return (
    <>
    <section className='flex flex-row items-center justify-center py-2'>
        <ApiCat /> 
    </section>
    </>
  )
}
