import { useState,createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null)

export const AuthProvider=({children})=>{
    const navigate=useNavigate()
    const verifyToken=async()=>{
        const token = await JSON.parse(localStorage.getItem('jwt'))
        console.log(token)
        if(token?.token){
          let config = {
            headers: {
              Authorisation:token.token,
            }
          }
          axios.get('http://localhost:3000/verifytoken',config)
          .then(res=>{
            const { success, details,token } = res.data;
            if(success){
              const detail=details[0]
              login(detail)
              console.log(detail)
            if(detail.type==='User'){
              navigate('/user')
            }
            else if(detail.type==='Admin')
            {
              navigate('/admin')
            }
            }
            else{
              navigate('/login')
            }
          })
        }}
          
          useEffect(()=>{
            verifyToken()
          },[])


    const [user,setUser]=useState(null)

    const login=(data)=>{
        console.log(data)
        setUser(data)
    }

    const logout=()=>{
        setUser(null)
    }

    const authContextValue = {
        user,
        login,
        logout,
      };

    return <AuthContext.Provider value={authContextValue}>
        {children}
    </AuthContext.Provider>
}

export const useAuth=()=>{
    return useContext(AuthContext)
}