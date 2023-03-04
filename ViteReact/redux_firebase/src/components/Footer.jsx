import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container-fluid text-decoration-none text-white bg-dark">
          <div className="row pt-4">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row list-items">
                <div className="col-6 col-lg-3">
                  <h4 className='text-white'>Company</h4>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3 text-white ">
                  <h4 className='text-white'>Support</h4>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h4 className='text-white'>Services</h4>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h4 className='text-white'>Follow Us</h4>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i className="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="#"
                        target="">
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para font-bold font-monospace text-center w-100">
                  Copyright @ 2021 MosF3T. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer