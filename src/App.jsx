import { useEffect, useState, useRef } from 'react'
import './App.css'
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function App() {

  const navButtons = Array.from(document.querySelectorAll('.nav-button'))
  const [position, setPosition] = useState('landing-page')

  window.addEventListener('DOMContentLoaded', function() { 
    window.location.hash='landing' // set view to landing on page load

    // observe pages, update position when page in view
    const pages = document.querySelectorAll('.page')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPosition(entry.target.classList[1])
        }
      })
    }, { threshold: 0.8 })

    pages.forEach((page) => {
      observer.observe(page)
    })
    
  })

  useEffect(() => { // switch active nav button based on page in view
    switch(position) {
      case 'landing-page':
        setActiveNav(0)
        break
      case 'about-page':
        setActiveNav(1)
        break
      case 'projects-page':
        setActiveNav(2)
        break
      case 'contact-page':
        setActiveNav(3)
        break
    }
  }, [position])

  function setActiveNav(target) { // set active nav button
    for (let i = 0; i < navButtons.length; i++) {
      navButtons[i].classList.remove('nav-active')
      if (i == target) {
        navButtons[i].classList.add('nav-active')
      }
    }
  }

  return (
    <>
      <div className='page-container'>
        <div className='nav' style={{ opacity: position == 'ul-links' ? 0 : 1 }}>
          <a href='#landing'><button className='nav-button nav-active' id='nav-1'></button></a>
          <a href='#about'><button className='nav-button' id='nav-2'></button></a>
          <a href='#projects'><button className='nav-button' id='nav-3'></button></a>
          <a href='#contact'><button className='nav-button' id='nav-4'></button></a>
        </div>

        <div id='landing'>
          <Landing />
        </div>

        <div id='about'>
          <About />
        </div>
        
        <div id='projects'>
          <Projects />
        </div>

        <div id='contact'>
          <Contact />
        </div>

        <div id='footer'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
