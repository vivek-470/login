
import React from 'react'
import Home from './components/Home'
import Signin from './components/Signin'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Account from './components/Account'

const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="signup/account" element={<Account/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
