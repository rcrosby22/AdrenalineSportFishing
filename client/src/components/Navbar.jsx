import { Link } from 'react-router-dom'
const Navbar = () => {
  
  return (
    <nav className="navbar flex w-full border border-red-500 justify-between items-center">
      <div className="p-2">Company Name</div>
      <ul className="hidden sm:block">
        <li>
          <Link to="/" className="p-2">Home</Link>
          <a href="#first"  className="p-2">About</a>
        </li>
      </ul>
 
     
    </nav>
  )
}

export default Navbar