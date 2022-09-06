import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from './Components/about/About'
import Blog from './Components/blog/Blog'
import Home from './Components/home/Home'
import Resume from './Components/resume/Resume'
import Works from './Components/works/Works'

import Navbar from './Navbar'

export default function App() {
  return (
    <div>
      <Navbar/>
     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/bolg' element={<Blog/>}/>

        </Routes>

      
    </div>
  )
}
