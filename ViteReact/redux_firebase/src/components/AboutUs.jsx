import React from 'react'
import { useState } from 'react'
import HowToUse from '../assets/APIs/HowToUse'
import hero2 from '../assets/hero2.jpg'    
import hero3 from '../assets/hero3.jpg'    
import CC from '../assets/callcenter.jpg'    
const AboutUs = () => {
    const [aboutData,setAboutData] = useState(HowToUse);
  return (
    <>
        <section className='common-section our-services'>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 col-lg-5 mb-sm-5 mb-lg-0 text-center our-service-leftside-image'>
                        <img src={hero2} className='img-fluid ' alt='img'></img>
                    </div>
                    {/* section right side data */}
                    <div className='col-12 col-lg-7 our-services-list'>
                        <h6 className='mini-title'>
                            -- Available @ Google And IOS APP STORE Only
                        </h6>
                        <h3 className='main-heading'>How to use the App</h3>
                        {
                            aboutData.map((element)=>{
                                let {id,title,info} = element;

                     return (  <div className='row our-services-info' key={id}>
                            <div className='col-1 our-services-number'>{id}</div>
                            <div className='col-10 our-services-data'>
                                <h6>{title}</h6>
                                <p className='main-hero-para'>{info}
                                </p>
                            </div>
                        </div>
                     )
                            })
                        }
                        <br/>
                        <button className='btn-style btn btn-outline-primary btn-style-border'>learn more</button>

                    </div>
                </div>
            </div>
        </section>

        <section className='common-section our-services'>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 our-services-rightside-content col-lg-7 our-services-list '>
                        <h6 className='mini-title'>
                            -- SUPPORT IN ANY LANGUAGE
                        </h6>
                        <h3 className='main-heading'>World Class Support is<br/> Available 24x7</h3>
                        {
                            aboutData.map((element)=>{
                                let {id,title,info} = element;

                     return (  <div className='row our-services-info' key={id}>
                            <div className='col-1 our-services-number'>{id}</div>
                            <div className='col-10 our-services-data'>
                                <h6>{title}</h6>
                                <p className='main-hero-para'>{info}
                                </p>
                            </div>
                        </div>
                     )
                            })
                        }
                        <br/>
                        <button className='btn-style btn btn-outline-primary btn-style-border'>learn more</button>

                    </div>
                    <div className='col-12 col-lg-5 text-sm-center text-lg-start out-service-leftside-image'>
                        <img src={CC} className='img-fluid' alt='img'></img>
                    </div>
                    {/* section right side data */}
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutUs