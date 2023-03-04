import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import serviceAPI from '../assets/APIs/serviceAPI'

const Services = () => {
    const[serviceData,setServiceData]=useState(serviceAPI);
  return (
    <section>
        <Container className='mt-5 mb-5 pt-5 pb-5'>
            <h4 className='text-center fw-bold'>How To Send Money</h4>
            <Row>
            {
                serviceData.map((element)=>{
                        let {id,logo,title,info} = element;
               return <Col sm={12} md={6} lg={4} key={id} className='work-container-subdiv m-auto'> 
                    <i className={`fontawesome-style ${logo} align-self-start`}/>
                    <h5 className='fw-bold'>{title}</h5>
                    <p>{info}</p>
                </Col>
                })
            }
            </Row>
        </Container>
    </section>
  )
}

export default Services;