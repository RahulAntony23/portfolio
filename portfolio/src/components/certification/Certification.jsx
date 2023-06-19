import React from 'react'
import './certification.css'
import cisco from '../../assets/images/cisco.png'
import hack from '../../assets/images/hackerrank.png'
import course from '../../assets/images/coursera.png'
import ibm from '../../assets/images/ibm.png'
import edyoda from '../../assets/images/edyoda.jpg'
import guvi from '../../assets/images/guvi.png'
import aws from '../../assets/images/aws.png'

const Certification = () => {
  return (
    <section id="certifications"> 
      <h5>Don't Trust Me , ask them</h5>
      <h2>Certifications</h2>
      <br />

      <div className="container certifications_container">
        <div className="certifications_content">
        
          <article className="certifications_card">
            <img className="certification_img" src={hack} alt="1" border="0" />
              <h4>
                <b>Java</b>
              </h4> 
              <div>
              <small className="text-light">HackerRank</small>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='https://www.hackerrank.com/certificates/0ed93734418a' target="_blank" className="link_btn" >View Certificate</a>
              </div>
          </article>

          <article className="certifications_card">
            <img className="certification_img"src={course} alt="1" border="0" />
              <h4>
                <b>Python for Data Science</b>
              </h4> 
              <div>
              <small className="text-light">Coursera</small>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='https://www.coursera.org/account/accomplishments/certificate/VXXQKNQ24RUF' target="_blank" className="link_btn" >View Certificate</a>
              </div>
          </article>

          <article className="certifications_card">
            <img className="certification_img"src={ibm} alt="1" border="0" />
              <h4>
                <b>Artificial Intelligence</b>
              </h4> 
              <div>
              <small className="text-light">IBM</small>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='https://www.coursera.org/account/accomplishments/certificate/E8BEAKX7FAA3' target="_blank" className="link_btn" >View Certificate</a>
              </div>
          </article>

          <article className="certifications_card">
            <img className="certification_img"src={hack} alt="1" border="0" />
              <h4>
                <b>Javascript </b>
              </h4> 
              <div>
              <small className="text-light">HackerRank</small>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='https://www.hackerrank.com/certificates/2df538707cdc' target="_blank" className="link_btn" >View Certificate</a>
              </div>
          </article>

          <article className="certifications_card">
            <img className="certification_img"src={edyoda} alt="1" border="0" />
              <h4>
                <b>Frontend Development</b>
              </h4> 
              <div>
              <small className="text-light">Edyoda</small>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='https://www.udemy.com/certificate/UC-7f129418-b0e9-40d4-9c20-870003e72994/' target="_blank" className="link_btn" >View Certificate</a>
              </div>
          </article>

          <article className="certifications_card">
            <img className="certification_img"src={cisco} alt="1" border="0" />
              <h4>
                <b>Cybersecurity</b>
              </h4> 
              <div>
              <small className="text-light">Cisco Net Academy</small>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='https://www.credly.com/badges/10079e7c-9532-46a3-be0c-b130155c52df?source=linked_in_profile' target="_blank" className="link_btn" >View Certificate</a>
              </div>
          </article>

          <article className="certifications_card">
            <img className="certification_img"src={guvi} alt="1" border="0" />
              <h4>
                <b>Python for Computer Vision</b>
              </h4> 
              <div>
              <small className="text-light">Guvi</small>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='https://www.guvi.in/verify-certificate?id=uyl1202828k826gA3M&gwr=true&course=aiforindia' target="_blank" className="link_btn" >View Certificate</a>
              </div>
          </article>

          <article className="certifications_card">
            <img className="certification_img"src={edyoda} alt="1" border="0" />
              <h4>
                <b>Android Development</b>
              </h4> 
              <div>
              <small className="text-light">Edyoda</small>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='https://www.udemy.com/certificate/UC-da4fb3f6-2846-42fc-8085-8bdb2da35d4f/' target="_blank" className="link_btn" >View Certificate</a>
              </div>
          </article>
          
          <article className="certifications_card">
            <img className="certification_img"src={hack} alt="1" border="0" />
              <h4>
                <b>GO </b>
              </h4> 
              <div>
              <small className="text-light">HackerRank</small>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='https://www.hackerrank.com/certificates/03a7590cda1e' target="_blank" className="link_btn" >View Certificate</a>
              </div>
          </article>

          <article className="certifications_card">
            <img className="certification_img"src={aws} alt="1" border="0" />
              <h4>
                <b>Cloud Computing </b>
              </h4> 
              <div>
              <small className="text-light">AWS</small>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='https://www.credly.com/badges/0b0b0b0a-0b0b-4b0b-8b0b-0b0b0b0b0b0b?source=linked_in_profile' target="_blank" className="link_btn" >View Certificate</a>
              </div>
          </article>

          <article className="certifications_card">
            <img className="certification_img"src={hack} alt="1" border="0" />
              <h4>
                <b>CSS </b>
              </h4> 
              <div>
              <small className="text-light">HackerRank</small>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='https://www.hackerrank.com/certificates/6c91f2d100bd' target="_blank" className="link_btn" >View Certificate</a>
              </div>
          </article>


          </div>
        </div>


    </section>
  )
}

export default Certification