import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../api/Superbase';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    //const BaseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [bio, setBio] = useState(null)
    //const [avatarUrl, setAvatarUrl] = useState(null)
    const [avatarUrl, setAvatarUrl] = useState(null)
    const [withcat, setWithcat] = useState(null)
    const [fullname, setFullname ] = useState(null)
    const user = useUser()

    async function getProfile() {
      try {
        setLoading(true)
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`username, bio, avatar_url, withcat, fullname`)
          .eq(user.id)
          .single()
  
        if (error && status !== 406) {
          throw error
        }
  
        if (data) {
          setUsername(data.username)
          setBio(data.bio)
          setAvatarUrl(data.avatar_url)
          setFullname(data.fullname)
          setWithcat(data.withcat)
        }
      } catch (error) {
        alert('Error loading user data!')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    
  async function getAvatarUrl() {
    try {
      if (!user) {
        return null
      }
      const { data, error } = await supabase
        .from('profiles')
        .select('avatar_url')
        .eq('id', user.id)
        .single()
      if (error) {
        throw error
      }
      const { avatar_url } = data
      if (!avatar_url) {
        return null
      }
      const { data: imageData, error: imageError } = await supabase.storage
        .from('avatars')
        .download(avatar_url)
      if (imageError) {
        throw imageError
      }
      const url = URL.createObjectURL(imageData)
      return url
    } catch (error) {
      console.error('Error getting avatar URL:', error)
      return null
    }
  }

  //console.log(user.email)
  //console.log(user.id)

      const value = {
        loading,
        username,
        bio,
        avatarUrl,
        setAvatarUrl,
        withcat,
        fullname,
        getProfile,
        getAvatarUrl
      }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;