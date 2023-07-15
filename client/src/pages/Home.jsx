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

      <div>
        <h1></h1>
        <img></img>
      </div>
      <p
        id="About"
        className="repeatme text-md py-4 px-2 leading-6 text-md md:text-lg"
      >
        Welcome to Adrenaline Sport Fishing Charters. My name is Captain Pat
        Crosby and I am obsessed with being on the water. I've had a lifelong
        passion for fishing and anything to do with boats and being on our Seas.
        I hold a 200 ton masters license as well as a 1600 ton mates license.
        Over my Maritime career I've served on wooden square rigged tall ships
        to cement carriers and 100,000 barrel petroleum carriers. Throughout my
        career I've always kept a passion for offshore fishing in the beauty of
        our Great Lakes. I believe this background provides me with the ability
        to share my experiences and skills to provide you and your family or
        friends with a truly memorable fishing charter. You're in good hands
        with Adrenaline Sport Fishing charters. Captain Pat Crosby{' '}
      </p>
      <p id="second"></p>
      {/* <About /> */}

      <Services />
      <Reviews />
      <div>
        <div className="py-8 flex flex-col items-center">
          <p>Explore our services and book your fishing adventure now!</p>
          <Link to="/booking">Book Now</Link>
          <p>
            Create an account to manage your future bookings with Adrenaline
            Sport Fishing. <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Home
