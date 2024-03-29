import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
//import UserContext from '../Context/UserContext'
import Upload from './Upload'
import { Database } from '@/utils/database.types'
//import Avatar from './Avatar'
type Profiles = Database['public']['Tables']['profiles']['Row']

const AccountPage = ({ session }: { session: any }) => {  
  const [withcat, setWithcat] = useState<Profiles['withcat']>(null)
  const [fullname, setFullName] = useState<Profiles['fullname']>(null)

  const supabase = useSupabaseClient<Database>()

  const user = useUser()
  const sessionUser = session?.user


  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState<Profiles['username']>(null)
  const [bio, setBio] = useState<Profiles['bio']>(null)
  const [avatar_url, setAvatarUrl] = useState<Profiles['avatar_url']>(null)

  useEffect(() => {
    getProfile()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!user) throw new Error('No cuenta')
      if (!user.id) throw new Error('No cuenta id')
      
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, fullname, bio, avatar_url, withcat`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setBio(data.bio)
        setAvatarUrl(data.avatar_url)
        setFullName(data.fullname)
        setWithcat(data.withcat)
      }
    } catch (error) {
      alert('Error loading cuenta data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  async function updateProfile({ username, fullname, withcat, bio,avatar_url,
    } : {
      username: Profiles['username']
      fullname: Profiles['fullname']
      withcat: Profiles['withcat']
      bio: Profiles['bio']
      avatar_url: Profiles['avatar_url']
    }) {
        try {
          setLoading(true)
          if (!user) throw new Error('No cuenta')
          const updates = {
            id: user.id,
            username,
            fullname,
            withcat,
            bio,
            avatar_url,
            updated_at: new Date().toISOString(),
          }

          let { error } = await supabase.from('profiles').upsert(updates)
          if (error) throw error
          alert('Profile updated!')
        } catch (error) {
          alert('Error updating the data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
    }

  //console.log(user)

  return (
    <div className="form-widget">
      <h1>Actualizar Perfil</h1>

        <Upload
        uid={user?.id}
        url={avatar_url}
        size={150}
        onUpload={(url: any) => {
          setAvatarUrl(url)
          updateProfile({ 
            username,
            fullname,
            withcat,
            bio,
            avatar_url,
           })
        }}
        />

      <div>
        <label> {sessionUser?.email || null} </label>
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fullname"> Nombre </label>
        <input
          id="fullname"
          type="text"
          value={fullname || ''}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bio">Biografia</label>
        <input
          id="bio"
          type="url"
          value={bio || ''}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <label htmlFor="withcat">Tienes gato?</label>
      <select
        id="withcat"
        name="withcat"
        value={withcat || ''}
        onChange={(e) => setWithcat(e.target.value)}
      >
        <option value="true">Si</option>
        <option value="false">No</option>
      </select>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({
            username,
            fullname,
            withcat,
            bio,
            avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default AccountPage