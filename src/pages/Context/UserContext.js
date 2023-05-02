import { React, createContext } from 'react';
import { supabase } from '../lib/supabase';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const handleLogin = async () => {
        const { user, session, error } = await supabase.auth.signIn({
            provider: 'google',
        });
    };

    (async () => {
        const { data, error } = await supabase.from('Users').select('*');
        if (error) {
          console.error(error);
        } else {
          console.log(data);
        }
      })();

      const value = { handleLogin };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;