import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Batch2025 from './Pages/Batch2025';
import Devs from './Pages/Devs';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/batch-2025" element={<Batch2025 />} />
        <Route path="/devs" element={<Devs />} />
      </Routes>
    </Router>
  );
}

export default App
