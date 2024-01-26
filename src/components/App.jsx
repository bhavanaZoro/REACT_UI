import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'
import Register from './Register'
import Home from "./Home"
import { ToastContainer,toast} from 'react-toastify'

const App = () => {
  return (
    <div>
    <Router>
      <ToastContainer/>
      <Nav/>
      <Routes>

        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/" element={<Home/>}/>

      </Routes>
    </Router>


    </div>
  )
}

export default App
