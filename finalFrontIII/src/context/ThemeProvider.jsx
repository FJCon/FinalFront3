import React, { createContext } from 'react'

export const ThemeCotext = createContext(null);

export const ThemeProvider = ({children}) => {

  const [theme,setTheme] = useState('')

  return (
    <ThemeCotext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeCotext.Provider>
  )
}
