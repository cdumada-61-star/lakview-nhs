import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>

      <main className='page-center'>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
