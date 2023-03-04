import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import CardDetails from './components/CardDetails';
import Cards from './components/Cards'


function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route  path='/' element={<Cards/>}/>
      <Route  path='/cart/:id' element={<CardDetails/>}/>
    </Routes>
    </Router>
  )
}

export default App
