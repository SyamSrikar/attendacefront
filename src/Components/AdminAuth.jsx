import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const AdminAuth=({children}) =>{
    const auth = useAuth() 
    const navigate=useNavigate()
    if(auth.user && auth.user.type==='Admin'){
        return children
     }
    else{
        return navigate('/login')
    }

}

export default AdminAuth