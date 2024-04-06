
import './App.css'
import { ThemeProvider } from './context/Themeprovider'
import { UserProvider } from './context/UserProvider'

function App() {


  return (
    <ThemeProvider>
      <UserProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
