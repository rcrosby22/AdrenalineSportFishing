import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import ReviewForm from './components/ReviewForm';
import About from './components/About';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/">
            <About />
          </Route>
          <Route exact path="/">
            <Services />
          </Route>
          <Route path="/services/:id">
            <ServiceDetails />
          </Route>
          <Route path="/bookingPage">
            <BookingPage />
            <BookingForm/>
          </Route>
        </Switch>
        <div className="container mx-auto p-4">
          <Reviews />
          <ReviewForm />
        </div>
        <Footer />
      </div>
      </Router>
  )
}

export default App
