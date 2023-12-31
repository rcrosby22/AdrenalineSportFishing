import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import BookingPage from './pages/BookingPage'
import Reviews from './components/Reviews'
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import About from './pages/About'

import { useNavigate } from 'react-router-dom'
import UpdateUser from './pages/UpdateUser'

const App = () => {
  const [user, setUser] = useState(null)
  let navigate = useNavigate()

  const handleRegistration = async (userData) => {
    try {
      console.log('Registration successful!')
    } catch (error) {
      console.error('Registration failed:', error.message)
    }
  }

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/user" element={<UpdateUser />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
