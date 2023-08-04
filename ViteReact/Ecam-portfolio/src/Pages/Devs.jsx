import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DevsCarsouel from '../components/DevsCarsouel'
const Devs = () => {
  return (
    <section className='DevsBg min-h-screen flex-col flex'>
    <Navbar/>
    <DevsCarsouel/>
    <Footer/>
    </section>
  )
}

export default Devs