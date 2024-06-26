import { Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Contacto from './Pages/Contacto'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import './Styles/App.css'
import './Styles/Style.css'
import Favs from './Pages/Favs'
import { useDentistaStates } from './context/AppContext.jsx'
import Footer from './Components/Footer'
import DentistaDetail from './Pages/DentistaDetail.jsx'

function App() {
  const {state} = useDentistaStates()
  
  return (  
    <div id={state.darkTheme ? 'dark' : 'light'}>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contacto/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/dentist/:id' element={<DentistaDetail />} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
