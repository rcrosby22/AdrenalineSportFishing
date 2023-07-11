
import './App.css'
import BookingForm from './components/BookingForm'
import Reviews from './components/Reviews'
import About from './components/About'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import ServiceDetails from './components/ServiceDetails'

const App = () => {


  return (
      <div className="App">
        <Header/>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <ServiceDetails/>
        <BookingForm/>
        <Reviews/>
        <Footer/>

      </div>
  )
}

export default App
