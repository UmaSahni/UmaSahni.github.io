import React from 'react'
import {Routes, Route} from "react-router-dom"
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import Hero from './Hero'
const AllRoutes = () => {
  return (
    <div>
    <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path="/about" element={<About/>} />
    <Route path='/contact' element={<Contact/>}/>
    <Route path='projects' element={<Projects/>} />
    </Routes>
    </div>
  )
}

export default AllRoutes