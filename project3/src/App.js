import React, { Fragment, useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
  const[usersList,setUsersList]=useState([]);
  const addUserHandler = (uName,uAge)=>{
    setUsersList(prevState=>{
      return [...prevState,{name:uName,age:uAge,
        id:Math.floor(100000*Math.random).toString()}]
    });
  };
  return (
    <Fragment>
    <AddUser onAddUser={addUserHandler} />
    <UserList users={usersList}/>
    </Fragment>
  );
}

export default App;
