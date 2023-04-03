import './App.css'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import VideoDetails from './components/VideoDetails'
import SearchFeeds from './components/SearchFeeds'
import Feeds from './components/Feeds'
function App() {

  return (
   <Router>
      <Box sx={{backgroundColor:'#181818'}}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Feeds/>} />
          <Route path='/video/:id' element={<VideoDetails/>} />
          <Route path='/search/:searchTerm' element={<SearchFeeds/>} />
        </Routes>
      </Box>
   </Router>
  )
}

export default App
