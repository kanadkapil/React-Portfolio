﻿import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound' // 👈 import this

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'skills', element: <Skills /> },
      { path: 'education', element: <Education /> },
      { path: 'certificates', element: <Certificates /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> } // 👈 catch-all 404 route
    ]
  }
])

export default router
