import React from 'react'
import { Header } from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
 import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer'
//  for react tostify for form submited icon in to right corner



const App = () => {
  return (
    <div className='w-full overflow-hidden'>
    <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App