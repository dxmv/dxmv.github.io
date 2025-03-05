import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import { Route, useLocation } from 'react-router'
import { Routes } from 'react-router'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/';

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  )
}

export default App
