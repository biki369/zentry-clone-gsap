
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Feature from './components/Feature'
import Story from './components/Story'
import Contact from './components/Contach'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=' relative min-h-screen overflow-x-hidden w-screen'>
      <Navbar/>
      <Hero />
      <About/>
      <Feature/>
      <Story/>
      {/* <Contact/> */}
      <Footer/>
    </main>
  )
}

export default App
