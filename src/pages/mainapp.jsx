
import '../App.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Features from '../components/Features'
import About from '../components/About'
import Newsletter from '../components/Newsletter'
import Footer from '../shared/Footer'
import Pricing from '../components/Pricing'
import { Contactus } from '../components/Contactus'





export default function Main() {
 
  return (
    <>
      {/* import components here */}
      <Home />
      <Navbar />
      
  
      <Features />
      <About />
      <Pricing/>
      <Newsletter />
      
      <Contactus />
     
      <Footer />

     

    </>

  )
}









