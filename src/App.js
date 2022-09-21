import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Feedback from './components/Feedback';
import Submissions from './components/Submissions';
import { createContext, useEffect, useReducer, useContext } from 'react';
import {intialState,reducer} from './components/reducer'
import axios from 'axios';

export const UserContext =createContext()


const Routing=()=>{

  const {state, dispatch} = useContext(UserContext)

  useEffect(()=>{
     sleep()
  },[state])

  useEffect(()=>{
    axios.get("/getUUID")
    .then(id=> dispatch({type: 'USER', payload:id.data}))
    .catch(err=>console.log(err))
    
  },[])

 

  const sleep=()=>{
    console.log("hi sleep")
    if(state!= null){
      setTimeout(()=>{dispatch({type: "CLEAR"})},10000)
    }
  }

  return(

    <div>
      <Routes>
        <Route exact path='/' element={<Feedback/>}></Route>
        <Route path='/submissions' element={<Submissions/>}></Route>
      </Routes>
    </div>
  )
}

function App() {

  const [state,dispatch] = useReducer(reducer,intialState)

  return (
    <div className="App">
      <UserContext.Provider value={{state,dispatch}}>
        <Router>
          <Routing/>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
