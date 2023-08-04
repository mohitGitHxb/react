import React from 'react'
import Allstudents from '../components/Allstudents'
import CRsection from '../components/CRsection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Batch2025 = () => {
  return (
    <section className='Batch-2025Bg min-h-screen flex-col flex'>
    <Navbar/>
     <CRsection/>
     <Allstudents/>
     <Footer/> 
    </section>
  )
}

export default Batch2025
