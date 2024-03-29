
// Superbase
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import AccountPage from './components/Cuenta'

//import { useState } from 'react'

export default function Profile() {
  //const [avatar_url, setAvatarUrl] = useState(null)
  //const { updateProfile } = useUser()

  //const user = useUser()
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
    <div className='contenedor flex flex-col items-center justify-center min-h-screen py-2'>
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <div className="row">
          <div className="col-6">
            <h1 className="header"> Serph cat</h1>
            <p className="">
              Sticker maker for Telegram and WhatsApp.
            </p>
          </div>
          <div className="col-6 auth-widget">
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
          </div>
        </div>
      ) : (
        <>
          <AccountPage session={session} />
        </>
      )}
</div>
    </div>
    </>
  )
}
