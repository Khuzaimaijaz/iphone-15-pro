import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlight from './components/Highlight'
import Model from './components/MOdel'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'


const App = () => {
  
  
  
  return (
    <main className='bg-black '>
     < Navbar/>
     <Hero/>
     <Highlight/>
     <Model/>
     <Features/>
     <HowItWorks/>
     <Footer/>
    </main>
  )
}

export default App
