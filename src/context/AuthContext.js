import React, { createContext, useState} from 'react';
import { useHistory } from "react-router-dom";

const initialState={
    isAuthenticated : false,
    user:{
        email:'user@user.com',
        password:'user'
    }
}

export const AuthContext = createContext()



const AuthContextProvider = (props) => {
    const [auth,setAuth]= useState(initialState)
    let history = useHistory();
    console.log(history);
    
    const login =(email,pass) => {
        // setAuth({...auth, isAuthenticated :!auth.isAuthenticated})
       // alert("you are logged in")
        
        if(auth.user.email === email && auth.user.password === pass){
            history.push("/home")
            setAuth({...auth, isAuthenticated :!auth.isAuthenticated})
            
        }else{
            console.log("wrong pass");           
        }
    }
    
    return (
        <AuthContext.Provider value={{...auth, login}}>
            {props.children}
        </AuthContext.Provider>
      );
}
 
export default AuthContextProvider;