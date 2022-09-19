import React from 'react'
import './Submission.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Submissions = () => {

    axios.get('/receiveMssg')
    .then()
  return (
    <div className='Submission_container'>
        <div children='cards'>
            <div className='card'>
                <p>UserId</p>
                <p>
                    Feedback message
                </p>
            </div>
            <div className='card'>
                <p>UserId</p>
                <p>
                    Feedback message
                </p>
            </div>
            <div className='card'>
                <p>UserId</p>
                <p>
                    Feedback message
                </p>
            </div>
            <Link to='/'><h6>Create a feedback?</h6></Link>
        </div>  
    </div>
  )
}

export default Submissions