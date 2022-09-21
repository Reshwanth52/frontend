import React, { useContext, useEffect, useState } from 'react'
import './Submission.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../App'
const Submissions = () => {

    const[mssg, setMssg] = useState("")
    const [uuid, setUUID] = useState("")

    const {state,dispatch} = useContext(UserContext)

    // useEffect(()=>{
    //     axios.get(`/receiveMssg/${state}`)
    //     .then(res=>console.log(res))
    //     .catch(err=>console.log(err))
    // })
  return (
    <div className='Submission_container'>
        <div children='cards'>
            <div className='card'>
                <p><h6 style={{color:'blue'}}>Your unique ID :</h6> {state.data.uuid}</p>
                <p>
                   <h6>Your Feedback :  </h6>{state.data.mssg}
                </p>
            </div>
            <Link to='/'><h6>Create a feedback?</h6></Link>
        </div>  
    </div>
  )
}

export default Submissions