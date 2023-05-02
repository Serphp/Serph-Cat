import React, { createContext, useState } from 'react';
import { supabase } from '../Superbase';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
          const { data, error } = await supabase
            .from('Users')
            .insert([
              { name, lastName, age }
            ]);
    
          if (error) {
            throw error;
          }
    
          console.log('User added successfully');
        } catch (error) {
          console.error('Error adding user:', error);
        }
      };

      const value = { 
        handleRegister,
        name, setAge, age, setLastName, lastName, setName,
     };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;