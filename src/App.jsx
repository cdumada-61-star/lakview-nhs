import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Officers from './components/pages/Officers'
import Events from './components/pages/Events'
import Home from './components/pages/Home';

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/events">Events</Link> | <Link to="/officers">Officers</Link>
      </nav>

      <main className='page-center'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/officers" element={<Officers />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
