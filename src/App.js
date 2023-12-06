import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Profile from './components/Profile'

const App = () => {
  const isLoggedIn=localStorage.getItem('email')&&localStorage.getItem('password')
  console.log(isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/profile' element={isLoggedIn ? <Profile/> : <Register/>}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
