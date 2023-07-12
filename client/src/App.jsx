import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/bookingPage"element={<BookingPage/>} /> */}
      </Routes>
      {/* <div className="container mx-auto p-4">
          <Reviews />
          <ReviewForm />
        </div>
        <Footer /> */}
    </div>
  )
}

export default App
