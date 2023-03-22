import React from 'react'
import {Routes, Route} from "react-router-dom"
import Hero from './Hero'
const AllRoutes = () => {
  return (
    <div>
    <Routes>
    <Route path="/about" element={<Hero/>} />
    {/* <Route path="" element={} />
    <Route path="" element={} />
    <Route path="" element={} />
    <Route path="" element={} /> */}
        </Routes>
    </div>
  )
}

export default AllRoutes