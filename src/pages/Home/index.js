import React, { useEffect } from 'react'
import Navbar from '../../components/homePage/Navbar'
import Hero from '../../components/homePage/Hero'
import About from '../../components/homePage/About'
import './style.css'
import Services from '../../components/homePage/Services'
import Contact from '../../components/homePage/Contact'
import { useNavigate } from 'react-router-dom'
const Index = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    window.addEventListener('load',()=>{
      navigate('/login')
    })
    
  })

  return (
    <>
    <div className='main'>
      <Navbar />
      <Hero />
      <About />
    <Services />
    <Contact />
    </div>
    
    </>
    
  )
}

export default Index
