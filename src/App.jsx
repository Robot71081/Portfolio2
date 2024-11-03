import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Statusbar from './components/Statusbar'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

const App = () => {
  return (
    <>
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
