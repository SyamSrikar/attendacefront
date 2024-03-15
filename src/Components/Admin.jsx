import React from 'react'
import { useNavigate } from 'react-router-dom'


const Admin=()=> {

  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/markattendance')
  }

  return (
    <>
    <div>Admin</div>
    <div onClick={handleClick}>Mark Attendance</div>
    </>
  )
}

export default Admin