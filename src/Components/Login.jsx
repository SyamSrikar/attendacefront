import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from './Auth'
import { Navigate,useNavigate} from 'react-router-dom'

const Login=()=> {
    const auth=useAuth()
    const navigate=useNavigate()
    const [userId,setUserId] = useState('')
    const [password,setPassword] = useState('')


    const handleSubmit=(e)=>{

        e.preventDefault()
        const data={
            id:userId,
            password:password
        }


        axios.post('http://localhost:3000/login', data)
        .then(res=>{const { success, details,token } = res.data;
          if(success){
            auth.login(details);
            localStorage.setItem('jwt',JSON.stringify({token}))
            if(details.type==='User'){
              navigate('/user')
            }
            else if(details.type==='Admin')
            {
              navigate('/admin')
            }
          }
          else{
            alert(details)
          }
        })
        .catch(error=>alert('invalid userid or password'))
    }

  return (
    <form onSubmit={handleSubmit} method='POST'>
        UserId: <input type='text' id='id' placeholder='Enter userId' required onChange={(e)=>setUserId(e.target.value)} />
        Password: <input type='password' id='password' placeholder='Enter Password' required onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Login