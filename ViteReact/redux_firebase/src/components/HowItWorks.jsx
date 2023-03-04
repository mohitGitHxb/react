import React, { useState } from 'react'
import WorkApi from '../assets/APIs/WorkApi'
const HowItWorks = () => {
    const [data,setData]  = useState(WorkApi);
  return (
    <section>
        <div className='work-container container'>
            <h1 className='main-heading text-center'>How Does It Work</h1>
            <div className='row'>
            {
                data.map((e,index)=>{
                    return (
                <div key={e.id} className='col-12 col-lg-4 text-center work-container-subdiv'>
                    <i className={`fontawesome-style ${e.logo}`}></i>
                    <h2 className='sub-heading'>{e.title}</h2>
                    <p className='main-hero-para w-100'>{e.info}</p>
                </div>

                    );
                })
            }
            </div>
        </div>
    </section>
  )
}

export default HowItWorks