import React, { useReducer, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const formInitialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
};

const reducer = (state,action)=>{

    switch (action.type) {
        case 'First Name':
            return {...state,firstName: action.val}
            break;
        case 'Last Name':
            return {...state,lastName: action.val}
            break;
        case 'Email':
            return {...state,email: action.val}
            break;
        case 'Phone':
            return {...state,phone: action.val}
            break;
        case 'Message':
            return {...state,message: action.val}
            break;
    
        default:
            break;
    }
    return formInitialState;
}

const Contact = () => {
   const [formDetails, dispatchFormDetails] = useReducer(reducer,formInitialState)
   const [status,setStatus] = useState({});
   const [buttonText,setButtonText] = useState('Submit');

   const submitHandler = (e) => {
        e.preventDefault();
        try {
            if (formDetails.firstName.trim().length === 0) {
                throw new Error('Please enter valid first name');
            }
            else if (formDetails.lastName.trim().length === 0) {
                throw new Error('Please enter valid last name');
            }
            else if (formDetails.phone.trim().length !== 10 || 
            isNaN(eval(formDetails.phone))) {
                throw new Error('Please enter valid phone');
            }
            else if (formDetails.email.trim().length === 0 || formDetails.email.includes('@') === false){
                throw new Error('Please enter valid email');
            }
        } catch (error) {
            setStatus({
                message:error.message,
                success:false,
            });
            return;
        }
        setStatus({
            message:'Submitted successfully',
            success:true,
        })
   }
   const onFormUpdate=(type , val)=>{
    switch (type) {
        case 'First Name':
            dispatchFormDetails({
                type: 'First Name',
                val,
            });
            break;
        case 'Last Name':
            dispatchFormDetails({
                type: 'Last Name',
                val,
            });
            break;
        case 'Email':
            dispatchFormDetails({
                type: 'Email',
                val,
            });
            break;
        case 'Phone':
            dispatchFormDetails({
                type: 'Phone',
                val,
            });
            break;
        case 'Message':
            dispatchFormDetails({
                type: 'Message',
                val,
            });
            break;
    
        default:
            break;
    }
   }
  return (
    <section className='contact' id='contact'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6} >
                <h2>Get in touch</h2>
                <form onSubmit={submitHandler}>
                    <Row>
                        <Col sm={6} className='px-1'>
                            <input type="text" value={formDetails.firstName} placeholder={'First Name'} onChange={(e)=>onFormUpdate('First Name',e.target.value)}/>
                        </Col>
                        <Col sm={6} className='px-1'>
                            <input type="text" value={formDetails.lastName} placeholder={'Last Name'} onChange={(e)=>onFormUpdate('Last Name',e.target.value)}/>
                        </Col>
                        <Col sm={6} className='px-1'>
                            <input type="email" value={formDetails.email} placeholder={'Email'} onChange={(e)=>onFormUpdate('Email',e.target.value)}/>
                        </Col>
                        <Col sm={6} className='px-1'>
                            <input type="text" value={formDetails.phone} placeholder={'Phone Number'} onChange={(e)=>onFormUpdate('Phone',e.target.value)}/>
                        </Col>
                        <Col>
                           <textarea rows='6' value={formDetails.message} placeholder='Message' onChange={(e)=>onFormUpdate('Message',e.target.value)}/>

                           <button type='submit'   ><span>{buttonText}</span></button>
                        </Col>

                        {
                            status.message && 
                            <Col>
                                <p className={status.success ? 'success' : 'danger' }>
                                    {status.message}
                                </p>
                            </Col>
                        }
                    </Row>
                </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact;