import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
// import Navbar from '../components/Navbar'

import Services from '../components/Services'
import Reviews from '../components/Reviews'
import { Card, CardContent } from '@mui/material'

const Home = () => {
 
  return (
    <div>
      <div id="hero" className="flex items-center justify-center">
      
      </div>

      <Services />
     
       
      
      <p id="second"></p>
      {/* <About /> */}

      <Reviews />
      <div>
        <div className="py-8 flex flex-col items-center">
          <p>Explore our services and book your fishing adventure now!</p>
          <Link to="/booking">Book Now</Link>
       
        </div>
      </div>
    </div>
  )
}
export default Home
