import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useEffect } from 'react'
import axios from 'axios'

const User=()=> {
  const auth = useAuth()
  const [attendance,setAttendance]=useState('')

  const getAttendance=async()=>{
    const id=auth.user.userId
    const result = await axios.post('http://localhost:3000/getattendance',{id})
    const present=result.data.data.length
    const percentage=(present/30)*100
    setAttendance(Math.round(percentage))
  }
  useEffect(()=>{
    console.log(auth.user.userId)
      getAttendance()
      
  },[]) 

  return (
    <>
    <div>User</div><br/>
    <div> Your Attendance</div>
    <div>{attendance} %</div>
    </>
  )
}

export default User