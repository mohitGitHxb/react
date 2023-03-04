import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';
const AddUser = (props)=>{

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername,setEnteredUsername]=useState('');
    // const [enteredAge,setEnteredAge]=useState('');
    const [error,setError] = useState();
    const addUserHandler = (event)=>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge=nameInputRef.current.value;
        if(enteredName.trim().length===0 || enteredUserAge.trim().length===0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age(Non-empty-values)'
            });
            return;
        }
        if(parseInt(enteredUserAge)<1){
            setError({
                title: 'Invalid age',
                message: 'Please enter age>1'
            });
            return;}

        props.onAddUser(enteredName,enteredUserAge);
        // setEnteredAge('');
        // setEnteredUsername('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

    };


    // const usernameChangeHandler  = (event)=>{
    //     setEnteredUsername(event.target.value);
    // };
    // const ageChangeHandler  = (event)=>{
    //     setEnteredAge(event.target.value);
    // };

    const errorHandler = (e)=>{
        setError(null);
    }
    return (
        <Wrapper>
       {error && <ErrorModal title={error.title} message={`${error.message}`} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type="text"  ref={nameInputRef} />
            <label htmlFor='age'>age (Years)</label>
            <input id='age' type="number"  ref={ageInputRef} />
            {/* <button type='submit'>Add User</button> */}
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
        </Wrapper>
    );
};

export default AddUser;