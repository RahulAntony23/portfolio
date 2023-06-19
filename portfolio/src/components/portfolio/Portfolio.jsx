import React from 'react'
import './portfolio.css'
import urlde from '../../assets/images/urldetector.jpeg'
import qapp from '../../assets/images/qapp.jpeg'
import qdoor from '../../assets/images/qdoor.jpeg'
import findmygroove from '../../assets/images/findmygroove.jpeg'
import chatapp from '../../assets/images/chatapp.jpeg'
import rsa from '../../assets/images/rsa.jpeg'

const Portfolio = () => {
  return (
  
    <section id="portfolio">
      <h5>My projects</h5>
      <h2>Portfolio</h2>
      <br/>
      <br/>
      <div className="container portfolio_container">


      <div className="portfolio_item">
      <img src={qdoor} className='portfolio_img'/>
      <h4>Q'Do'or Registration Server</h4>
      <small>Written using Node.js and Express for registerting clients.
      Part of Q'Do'or Project.
      </small>
      <a href='https://github.com/RahulAntony23/NasscomProject' target="_blank" className="git_btn" >Open Project</a>
      </div>

      
      <div className="portfolio_item">
      <img src={qapp} className='portfolio_img'/>
      <h4>Q'Do'or Mobile App</h4>
      <small>Developed using Flutter , app for QR deployment. 
      Part of Q'Do'or Project.
      </small>
      <a href='https://github.com/RahulAntony23/NasscomProject' target="_blank" className="git_btn" >Open Project</a>
      </div>

      <div className="portfolio_item">
          <img src={findmygroove} className='portfolio_img'/>
          <h4>findmygroove</h4>
          <small>A HTML,CSS and JavaScript simple static website using PHP for back-end data pickup
          </small>
          <a href='https://github.com/RahulAntony23/NasscomProject' target="_blank" className="git_btn" >Open Project</a>
          </div>

      <div className="portfolio_item">
          <img src={rsa} className='portfolio_img'/>
          <h4>RSA Socket chat</h4>
          <small>A Java Socket chat application that uses RSA encryption for secure communication
          </small>
          <a href='https://github.com/RahulAntony23/NasscomProject' target="_blank" className="git_btn" >Open Project</a>
          </div>

        <div className="portfolio_item">
          <img src={urlde} className='portfolio_img'/>
          <h4>Malicious URL Predictor</h4>
          <small>Uses Linear and Logistical Regression to find out Malicious URLs out of a set of URLs
          </small>
          <a href='https://github.com/RahulAntony23/NasscomProject' target="_blank" className="git_btn" >Open Project</a>
          </div>

          <div className="portfolio_item">
          <img src={chatapp} className='portfolio_img'/>
          <h4>Bluetooth Chat App</h4>
          <small>A Chat application written in Android Native using Java and XML
          </small>
          <a href='https://github.com/RahulAntony23/NasscomProject' target="_blank" className="git_btn" >Open Project</a>
          </div>

      

        
        
          
      </div>

    </section>
  )
}

export default Portfolio