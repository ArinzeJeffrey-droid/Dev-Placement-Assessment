import React, { useEffect } from 'react'
import Dashboard from './components/Dashboard'
import Intro from './components/Intro'
import axios from "axios"
import process from "./env"


const App = () => {
  useEffect(() => {
    axios.get(process.env.API_URL)
      .then(res => {
        console.log(res);
      })
  },[])
  return (
    <div className="container">
      <Intro/>
      <Dashboard/>
    </div>
  )
}
export default App;
