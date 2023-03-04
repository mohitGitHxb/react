import React from 'react'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import HowItWorks from './HowItWorks'
import NavBar from './NavBar'
import Services from './Services'
const Homepage = () => {
  return (
    <>
     <NavBar/>
     <Header/>
     <HowItWorks/>
     <AboutUs/>
     <Services/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Homepage