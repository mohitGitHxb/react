import React, { useState } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import hero1 from "../assets/hero1.jpg";


const initialState = {
  firstName:'',
  lastName:'',
  address:'',
  phone:'',
  email:'',
  message:'',
}

const reducer = (state,action)=>{
    switch (action.type) {
      case 'FIRST_NAME_CHANGE':
        return {...state,firstName:action.value}
      case 'LAST_NAME_CHANGE':
        return {...state,lastName:action.value}
      case 'EMAIL_CHANGE':
        return {...state,email:action.value}
      case 'MESSAGE_CHANGE':
        return {...state,message:action.value}
      case 'PHONE_CHANGE':
        return {...state,phone:action.value}
      case 'ADDRESS_CHANGE':
        return {...state,address:action.value}
      case 'CLEAR':
        return initialState;
      default:
        return state
        break;
    }
}

const Contact = () => {

  const[isChecked,setIsChecked] = useState(false);
  const [userData, dispatchUserData] = React.useReducer(reducer, initialState); 

  function userDataChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case 'firstName':
        dispatchUserData({type: 'FIRST_NAME_CHANGE',value:value})
        break;
      case 'lastName':
        dispatchUserData({type: 'LAST_NAME_CHANGE',value:value})
        break;
      case 'email':
        dispatchUserData({type: 'EMAIL_CHANGE',value:value})
        break;
      case 'phone':
        dispatchUserData({type: 'PHONE_CHANGE',value:value})
        break;
      case 'address':
        dispatchUserData({type: 'ADDRESS_CHANGE',value:value})
        break;
      case 'message':
        dispatchUserData({type: 'MESSAGE_CHANGE',value:value})
        break;
      default:
        break;
    }
  }


const checkHandler = ()=>{
  setIsChecked(!isChecked);
}


const submitHandler = async (e)=>{
  e.preventDefault();
  const {firstName,
  lastName,
  address,
  phone,
  email,
  message,} = userData
  if (!isChecked) {
    alert('Please Check the Check box');
    return;
  }
  try {
    const response = await fetch('https://reacttutorials-ae7db-default-rtdb.firebaseio.com/Contacts.json',{
      method:'POST',
      headers:{
        'content-type': 'application/json',
      },
      body:JSON.stringify({
        firstName,
  lastName,
  address,
  phone,
  email,
  message,
      })
    });
    if(!response.ok){
      throw new Error("Something went wrong ... " + response.statusText);
    }
    if (response.ok) {
      console.log(response.statusText)
      prompt("Submitted response succesfully");
      dispatchUserData({type:'CLEAR',value:``})
    }
    
  } catch (error) {
    console.log(error);
  }

}

  return (
    <section>
      <Container className="mt-5">
        <Row>
          <Col lg={5} sm={11} className='d-flex flex-column justify-content-evenly contact-leftside'>
            <strong className="fs-4">Connect With Our Sales Team</strong>
            <p className="main-hero-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia
              quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Etquia quis?
            </p>
            <Image
              className="img-fluid mb-4"
              width={250}
              src={hero1}
              alt={`image`}
            ></Image>
          </Col>
          <Col lg={7} sm={12} className="contact-rightside">
                  <Form method="POST" onSubmit={submitHandler}>
                    <Row>
                      <Col lg={6} sm={12} className="contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          onChange={userDataChange}
                          value={userData.firstName}
                          maxLength={30}
                          minLength={2}
                        />
                      </Col>
                      <Col lg={6} sm={12} className=" contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          onChange={userDataChange}
                          value={userData.lastName}
                          maxLength={50}
                          minLength={2}
                       
                        />
                      </Col>
                    </Row>
                    <Row >
                      <Col lg={6} sm={12} className="contact-input-feild">
                        <input
                          type="tel"
                          name="phone"
                          id=""
                          className={`form-control ${(userData.error ? 'error-control' : '')}`}
                          placeholder="Phone Number"
                          onChange={userDataChange}
                          value={userData.phone}
                          maxLength={10}
                        />
                      </Col>
                      <Col lg={6} sm={12} className="contact-input-feild">
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          onChange={userDataChange}
                          value={userData.email}
                          minLength={5}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} className="contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          onChange={userDataChange}
                          value={userData.address}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={12}>
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          onChange={userDataChange}
                          value={userData.message}
                        />
                      </Col>
                    </Row>
                    <div className="form-check mt-5 mb-4 form-checkbox-style">
                      <input
                        className="form-check-input pe-3"
                        type="checkbox"
                        value=""
                        onClick={checkHandler}
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label">
                        I Agree to T&C
                      </label>
                    </div>

                   <Button variant="primary"
                   className="w-100 mb-sm-5 mb-lg-1"
                   type="submit">
                    submit
                   </Button>
                  </Form>
                </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
