import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'
const Homepage = () => {
  return (
    <section className='homepage min-h-screen flex-col flex'>
     <Navbar/> 
     <Home/>
     <Footer/>
    </section>
  )
}

export default Homepage
