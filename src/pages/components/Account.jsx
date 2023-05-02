import { useState, useEffect, useContext } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
//import UserContext from '../Context/UserContext'

export default function Account({ session }) {
  //const { getProfile } = useContext(UserContext)
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [bio, setBio] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const [withcat, setWithcat] = useState(false)
  const [fullname, setFullName] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, bio, avatar_url, withcat, fullname`)
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
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  async function updateProfile({ username, bio, avatar_url }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        bio,
        avatar_url,
        fullname,
        withcat,
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

  return (
    <div className="form-widget">
      <h1>Actualizar Perfil</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
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
          onClick={() => updateProfile({ username, bio, avatar_url })}
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