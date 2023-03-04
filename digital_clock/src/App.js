// import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';



function App() {
  let Time = new Date().toLocaleTimeString();
  const [time, setTime] = useState(Time);
  const startClock = ()=>{
    Time=new Date().toLocaleTimeString();
      setTime(Time);
  }

 setInterval(()=>{
  startClock();
  // console.log(time);
 },1000);
  return (
    <>
      <nav className='navbar navbar-light navbar-expand-lg text-center'>
        <h2 className='text-bg-dark text-center text-white'>Digital clock using react</h2>
      </nav>
      <div className='container-md bg-dark fs-5 mt-5 text-danger text-center'>
          {time}
      </div>
    </>
  );
}

export default App;
