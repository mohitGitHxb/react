import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { AuthContextProvider } from './components/store/auth-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider><React.StrictMode>
  <Router><App /></Router>
  </React.StrictMode></AuthContextProvider>
)
