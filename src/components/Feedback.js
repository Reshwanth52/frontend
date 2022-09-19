import React,{useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Feedback.css'
import {UserContext} from '../App'

const Feedback = () => {
  const [data, setData] = useState("")

  const {state,dispatch} = useContext(UserContext)

    const feedData = (mssg) =>{     
      axios.post("/sendMssg",{mssg})
      .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
      <div className='Feed_container'>
        <div className='field'>
          <div className='user_id'>
            {state?state:'loading...'}
          </div>
          <textarea rows="14" cols="10" wrap="soft" type='text' placeholder='Give your valuable feedback' value={data} onChange={(e)=>{setData(e.target.value)}} className="inpf" />
          <button className='submit'  onClick={()=>feedData(data)} >Submit</button>
          <Link to='/submissions' style={{display:'flex'}}><h6>View Responses!</h6></Link>
        </div>    
      </div>
  )
}

export default Feedback