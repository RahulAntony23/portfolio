import React from 'react'
import './nav.css'
import {IoHome} from 'react-icons/io5'
import {SiAboutdotme} from 'react-icons/si'
import {SiExpertsexchange} from 'react-icons/si'
import {GoProject} from 'react-icons/go'
import {TbCertificate} from 'react-icons/tb'
import {MdOutlineContactSupport} from 'react-icons/md'
import {useState} from 'react'



const Nav = () => {
  const [nav, setNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setNav('#')} className={nav === '#' ? 'active' : ''}><IoHome /></a>
      <a href="#about" onClick={() => setNav('#about')} className={nav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#skills" onClick={() => setNav('#skills')} className={nav === '#skills' ? 'active' : ''}><SiExpertsexchange/></a>
      <a href="#certifications" onClick={() => setNav('#certifications')} className={nav === '#certifications' ? 'active' : ''}><TbCertificate/></a>
      <a href="#portfolio" onClick={() => setNav('#portfolio')} className={nav === '#portfolio' ? 'active' : ''}><GoProject/></a>
      <a href="#contact" onClick={() => setNav('#contact')} className={nav === '#contact' ? 'active' : ''}><MdOutlineContactSupport/></a>
    
    </nav>
  )
}

export default Nav