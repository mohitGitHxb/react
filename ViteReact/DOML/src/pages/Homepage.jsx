import React from 'react'
import Navbar from '../components/Navbar'
import MainHeader from '../components/MainHeader'
import ContentCardR from '../components/ContentCardR'
import ContentCardL from '../components/ContentCardL'
import Testimonials from '../components/Testimonials'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <MainHeader />
      <Brands />
      <ContentCardR imgUrl={'./1.png'} altTxt={"cube"}/>
      <ContentCardL imgUrl={'./18.png'} altTxt={"random"} />
      <Testimonials/>
      <ContentCardR imgUrl={'./50.png'} altTxt={"cube"}/>
      <ContentCardL imgUrl={'./22.png'} altTxt={"random"} />
      <ContactUs/>
      <Brands />
      <Footer/>
    </>
  )
}

export default Homepage
