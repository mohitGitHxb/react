import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {AuthContextProvider} from './components/store/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>,
)
