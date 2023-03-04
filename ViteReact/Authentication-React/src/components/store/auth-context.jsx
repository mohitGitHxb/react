import React, { useCallback, useEffect, useState } from 'react';
import { createContext } from 'react';

let logoutTimer;

const AuthContext = createContext({
    token:``,
    isLoggedIn:false,
    login: (token) => {},
    logout: ()=>{}
})


const calculateRemainingTime = (expirationTime) => {
    let currentTime = new Date().getTime();
    let adjustedTime = new Date(expirationTime).getTime
    return adjustedTime - currentTime;
}

const retrieveToken = () =>{
    const initialToken = localStorage.getItem('token')
    const expirationTime = localStorage.getItem('expirationTime')
    let sessionTime = calculateRemainingTime(expirationTime);
    if(sessionTime < 0){
        prompt("Session has expired");
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    else{
        return {
            token:initialToken,
            sessionTime,
        }
    }
}
export const AuthContextProvider = props =>{ 
    // const initialToken = localStorage.getItem('token')
    const tokenData = retrieveToken();
    let initialToken;
    if(tokenData){
        initialToken = tokenData.token;
    }
    const[token,setToken]=useState(initialToken);
    const userIsLoggedIn = !!token


    const logoutHandler = useCallback(()=>{
        setToken(``);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        if(logoutTimer){
            clearTimeout(logoutTimer);
        }
    },[])

    
    const loginHandler = (token,expirationTime) =>{
        localStorage.setItem('token',token);
        const initialToken = localStorage.getItem('token')
        setToken(token);
        let sessionTime = calculateRemainingTime(expirationTime);
        logoutTimer =  setTimeout(logoutHandler,sessionTime);
    }

    useEffect(()=>{
        if(tokenData){
            logoutTimer =  setTimeout(logoutHandler,tokenData.sessionTime);
        }
    },[tokenData,logoutHandler])
    const contextValue = {
        token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;