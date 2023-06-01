/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
//import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database } from '@/utils/database.types'
import { UserContext } from '../Context/UserContext'
type Profiles = Database['public']['Tables']['profiles']['Row']

export default function AvatarProfile({
  uid,
  size,
}: {
  uid: string
  size: number
}) {
  const { getAvatarUrl } = React.useContext(UserContext)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAvatarUrl() {
      const url = await getAvatarUrl(uid)
      setAvatarUrl(url)
    }
    fetchAvatarUrl()
  }, [uid])

  return (
    <div>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Avatar"
          className="avatar back"
          style={{ height: size, width: size }}
        />
      ) : (
        <div className="avatar no-image" style={{ height: size, width: size }} />
      )}

    </div>
  )
}