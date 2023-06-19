import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey There , I am</h5>
        <h1>Rahul Antony</h1>
        <h5 className="header__subtitle">Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        

        
        <a href="#contact" className="scroll_down">Scroll Down</a>


      </div>
      
    </header>
  )
}

export default Header