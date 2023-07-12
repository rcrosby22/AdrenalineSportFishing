import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import BookingPage from './pages/BookingPage'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
      
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
