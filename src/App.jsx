
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Footer from './shared/Footer'
import Pricing from './components/Pricing'
import { Contactus } from './components/Contactus'
import Main from './pages/mainapp'
import Quote from './pages/Quote'
import { BrowserRouter, Route, Routes } from 'react-router-dom'






export default function App() {
 
  return (
    <>
      <BrowserRouter>

       <Routes>
        <Route path="*" element={<Main />}/>
          <Route path="/quote" element={<Quote />} />
          
      </Routes>
      </BrowserRouter>

      
    </>

  )
}









