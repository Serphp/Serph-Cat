import React, { useState, useContext } from 'react';
import { supabase } from './Superbase';
//import {UserContext} from './Context/UserContext';

export default function Register() {
  
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + React</h1>
        <p className="description">Sign in via magic link with your email below</p>
        <form className="form-widget" onSubmit={handleLogin}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button className={'button block'} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

//   const { handleRegister, name, setAge, age, setLastName, lastName, setName, } = useContext(UserContext);


//   return (
//     <form onSubmit={handleRegister}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
//       </label>
//       <label>
//         Last Name:
//         <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
//       </label>
//       <label>
//         Age:
//         <input type="text" value={age} onChange={(event) => setAge(event.target.value)} />
//       </label>
//       <button type="submit">Add User</button>
//     </form>
//   );
// }