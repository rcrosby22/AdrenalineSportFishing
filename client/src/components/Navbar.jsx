import { Link } from 'react-router-dom'
import SignIn from '../pages/SignIn'

const Navbar = () => {
  return (
    <nav className="navbar flex w-full border border-red-500 justify-between items-center">
      <div className="p-2">Adrenaline Sport Fishing Charters</div>
      <ul className="hidden sm:block">
        <li>
          <Link to="/booking" className="p-2">
            Book Now!
          </Link>
          <Link to="/" className="p-2">
            Home
          </Link>
          <a href="#first" className="p-2">
            About
          </a>
          <Link to="/register" className="p-2">
            Register
          </Link>
          <Link to="/SignIn" className="p-2">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
