
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className=' relative min-h-screen overflow-x-hidden w-screen'>
      <Navbar/>
      <Hero />
      <About/>
    </main>
  )
}

export default App
