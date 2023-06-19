import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {SiFlutter} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import ME from '../../assets/images/me.png'



const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h4><b>Java Gold Star</b></h4>
                <small>
                  Certified by Hackerrank
                </small>
            </article>

            <article className='about_card'>
              <SiLeetcode className='about_icon'/>
              <h3>100+</h3>
                <small>
                  Leetcode Problems Solved
                </small>
            </article>

            <article className='about_card'>
              <div className='about_icon'>
                <SiFlutter />
                |
                <FaReact />
              </div>
              <h4><b>Platform Based</b></h4>
                <small>
                  10+ Projects
                </small>
            </article>
        </div>

        <div className="about_text">
          <p> 
          Innovative Fresher skilled in creating fresh, modern designs. 
          Problem-solver successful at collaborating with technical 
          teams to deliver attractive and engaging results.
          <br></br>
          <br></br>

          Looking for exciting opportunities with a mid-large firm 
          where I can contribute towards innovative solutions and 
          lead pivotal projects that impact the organization's team members
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
           
      </div>
    </div>
  </div>
    </section>
  )
}

export default About