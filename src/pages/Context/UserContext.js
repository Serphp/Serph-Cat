import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../Superbase';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const BaseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;
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
            .select(`username, bio, fullname, avatar_url, withcat`)
            .eq('id', user.id)
            .single()
    
          if (error && status !== 406) {
            throw error
          }
    
          if (data) {
            setUsername(data.username)
            setBio(data.bio)
            setFullname(data.fullname)
            setAvatarUrl(data.avatar_url)
            setWithcat(data.withcat)
          }
        } catch (error) {
          alert('Error loading user data!')
          console.log(error)
        } finally {
          setLoading(false)
        }
      }

    
    async function getAvatarUrl(userId) {
      try {
        setLoading(true)
        let { data } = await supabase
          .from('profiles')
          .select(`username, bio, avatar_url, withcat, fullname`)
          .eq('id', user.id)
          .single()

        if (data) {
          setAvatarUrl(data.avatar_url)
        }
      } catch (error) {
          //alert('Error loading user data!')
          console.log(error)
          } finally {
          setLoading(false)
          }
      }

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