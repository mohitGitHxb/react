import React from 'react'
import NavBar from '../NavBar'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer'

const Errorpage = () => {
  return (
    <>
    <NavBar/>
        <div id="notfound">
        <div className="notfound container d-flex flex-column justify-content-center align-items-center">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2 className='position-absolute fw-bolder fs-2'>WE ARE SORRY, PAGE NOT FOUND!</h2>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </p>
          <NavLink className='btn btn-outline-danger' to="/">back to homepage</NavLink>
        </div>
      </div>
      <Footer/>

    </>
  )
}

export default Errorpage