import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import FacebookButton from './FacebookButton';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <FacebookButton />
          </Grid>
          <Grid item>
            <div className="nav-links" style={{ display: 'flex', gap: '1rem' }}>
              <Button component={Link} to="/booking" color="inherit">
                Book Now
              </Button>
              <Button component={Link} to="/user" color="inherit">
                Update Account
              </Button>
              <Button component={Link} to="/" color="inherit">
                Home
              </Button>
              <Button component={Link} to="/about" color="inherit">
                About
              </Button>
              <Button component={Link} to="/register" color="inherit">
                Register
              </Button>
              <Button component={Link} to="/signin" color="inherit">
                Sign In
              </Button>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
