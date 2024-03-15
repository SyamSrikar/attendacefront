import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const MarkAttendance=()=> {
    const navigate=useNavigate()
    const [date,setDate]=useState(null)
    const [details,setDetails]=useState([])
    const [selected,setSelected]=useState([])

    const handleDate=(e)=>{
        setDate(e.target.value);
    }
    const getList =async()=>{
        const result = await axios.post('http://localhost:3000/studentslist')
        if(result.data.success)
         setDetails(result.data.details)
    }

    const handleSelected=(value, id)=>{
      if(!value && selected.includes(id)){
        const index = selected.indexOf(id);
        const updatedValues = selected;
        updatedValues.splice(index, 1);
        console.log(index)
        console.log(updatedValues);
        setSelected([...updatedValues]);
      }else{
        setSelected([...selected, id])
      }
    }

    const handleSubmit=async()=>{
      if (date!=null)
      {
      const result=await axios.post('http://localhost:3000/postattendance',{selected,date})
      if(result){
        alert('attandance posted')
        navigate('/admin')
      }
      }
      else{
        alert('Select Date')
      }
      
    }

    useEffect(()=>
       {
        getList()
       }
        ,[])

  return (
    <>
    <div>MarkAttendance</div>
    <input type='date' required onChange={handleDate}/>
    <div>List</div>
    <ul>
      {
        details.map((student)=>{
          return(
            <li>
              <input type='checkbox' checked={selected.includes(student.userId)} onChange={(e) => {handleSelected(e.target.checked,student.userId)}} id={student.userId} />
              <label for={student.userId}>{student.name}
              </label>
            </li>
          )
        })
      }
    </ul>
    <button disabled={selected.length==0} onClick={handleSubmit}>Post Attendance</button>
    </>
    
  )
}

export default MarkAttendance