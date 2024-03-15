import React from 'react'
import { useAuth } from './Auth'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar=()=> {
    const auth=useAuth()
    const navigate=useNavigate()

    const handleLogout=()=>{
        auth.logout()
        localStorage.removeItem("jwt");
        navigate('/login')

    }
  return (
    <div className='bg-[#000000] flex px-[50px] w-[100%]'>
        <div className='flex flex-grow'></div>
        <div className='flex'>
        {auth.user?<>
        <div>Welcome: {auth.user.name}</div>
        <div onClick={handleLogout}>Logout</div></>
        :<div></div>
        }
        </div>
    </div>
  )
}

export default Navbar