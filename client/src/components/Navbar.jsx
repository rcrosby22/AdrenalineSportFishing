import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import FacebookButton from './FacebookButton'
import FacebookIcon from '@mui/icons-material/Facebook'

const Navbar = () => {
  return (
    <Grid
      container
      component="nav"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2 }}
    >
      <Grid item>
      <FacebookButton />
      </Grid>
      <Grid item>
        <ul className="nav-links" style={{ display: 'flex', gap: '1rem' }}>
          <li>
            <Link to="/booking" className="nav-link">
              Book Now
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li>
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
          </li>
        </ul>
        
      </Grid>
    </Grid>
  );
};

export default Navbar;
