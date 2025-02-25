import { useState } from 'react'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
