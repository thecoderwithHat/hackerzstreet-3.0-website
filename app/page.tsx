import About from '@/app/components/About'
import React from 'react'
import Footer from './components/Footer'
import HomePage from '@/app/components/Home'

const Home = () => {
  return (
    <div className="w-full h-screen">
      <HomePage/>
      <About />
      <Footer/>
    </div>
  )
}

export default Home