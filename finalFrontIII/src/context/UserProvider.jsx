import React, { createContext } from 'react'
export const UserContetx = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({});
  return (
    <UserContetx.Provider value={[user,setUser]}> {children} </UserContetx.Provider>
  )
}
