import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </>
  )
}

export default App
