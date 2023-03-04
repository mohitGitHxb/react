import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Aboutpage from './components/pages/Aboutpage'
import Servicepage from './components/pages/Servicepage'
import Contactpage from './components/pages/Contactpage'
import Errorpage from './components/pages/Errorpage'
function App() {
 
  return (
    <Router>
    <Routes>
      <Route path='/' index element={<Homepage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/services' element={<Servicepage/>}/>
      <Route path='/contact' element={<Contactpage/>}/>
      <Route path='*' element={<Errorpage/>}/>
    </Routes>

    </Router>
  )
}

export default App
