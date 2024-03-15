import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const UserAuth=({children})=> {
    const auth = useAuth() 
    const navigate=useNavigate()
    if(auth.user && auth.user.type==='User'){
        return children
     }
    else{
        return navigate('/login')
    }
}

export default UserAuth