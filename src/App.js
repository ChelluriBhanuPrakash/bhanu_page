import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Teacher from './Components/Teacher/Teacher'
import Course from './Components/Course/Course'
import Review from './Components/Review/Review'
import Contact from './Components/Contact/Contact'
import Bhanu_page from './Components/Bhanu_page/Bhanu_page'
import './App.css'

const App = () => {
  return (
    <div className='total'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/teacher' element={<Teacher />}></Route>
          <Route path='/course' element={<Course />}></Route>
          <Route path='/review' element={<Review />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/bhanu_page' element={<Bhanu_page />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
