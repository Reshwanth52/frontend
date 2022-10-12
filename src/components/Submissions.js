import React, { useContext, useEffect, useState } from 'react'
import './Submission.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../App'
const Submissions = () => {

    const[response,setResponse] = useState({data:""})

    const {state,dispatch} = useContext(UserContext)

    useEffect(()=>{
        axios.get(`receiveMssg/${state}`)
        .then(res=>setResponse(res))
        .catch(err=>console.log(err))
    },[response])
  return (
    <div className='Submission_container'>
        <div children='cards'>
            <div className='card'>
                <p><h6 style={{color:'blue'}}>Your unique ID :</h6> {response?response.data.uuid:""} </p>
                <p>
                   <h6>Your Feedback : {response?response.data.mssg:""} </h6>
                </p>
            </div>
            <Link to='/'><h6>Create a feedback?</h6></Link>
        </div>  
    </div>
  )
}

export default Submissions