import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'




const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Auth' element={<Auth/>}/>
      <Route path='/AskQuestion' element={<AskQuestion />}/>
      <Route path='/Questions' element={<Questions />}/>
            <Route path='/Questions/:id' element={<DisplayQuestion />}/>
    </Routes>
  )
}

export default AllRoutes