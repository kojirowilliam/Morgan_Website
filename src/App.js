import React, { useState } from 'react'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Navbar/pages';
import About from './Navbar/pages/about';
import Cool from './Navbar/pages/cool';
import Memories from './Navbar/pages/memories';
import Blog from './Navbar/pages/blog';

import './styles.css'

export default function App() {

  return (
    <div>
      <div id="header">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cool' element={<Cool/>}/>
          <Route path='/memories' element={<Memories/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>
      </div>
    </div>
  )
}