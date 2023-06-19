import React from "react";
import "./skills.css";
import { SiDatabricks } from "react-icons/si";
import { BsCodeSquare } from "react-icons/bs";
import { MdDataObject } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaMobile } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { TbBrandGolang } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import {SiFlutter} from 'react-icons/si'
import { SiMongodb } from "react-icons/si";


const Skills = () => {
  return (
    <section id="skills">
      <h5>What I Do</h5>
      <h2>My Skills</h2>
      <br />
      <br />

      <div className="container skills_container">
        <div className="skills_concepts">
          <h3>Concepts</h3>

          <div className="skills_content">
            <article className="skills_card">
              <SiDatabricks className="skills_icon" />
              <div>
              <h4>
                <b>Data Structures</b>
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="skills_card">
              <BsCodeSquare className="skills_icon" />
              <div>
              <h4>
                <b>Algorithims</b>
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="skills_card">
              <MdDataObject className="skills_icon" />
              <div>
              <h4>
                <b>Object Oriented Programming</b>
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="skills_card">
              <FaDatabase className="skills_icon" />
              <div>
              <h4>
                <b>Database Managment System</b>
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="skills_card">
              <CgWebsite className="skills_icon" />
              <div>
              <h4>
                <b>Web Design</b>
              </h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_card">
              <FaMobile className="skills_icon" />
              <div>
              <h4>
                <b>App Development</b>
              </h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>


        <div className="skills_lang">
          <h3>Languages</h3>

          <div className="skills_content">
            <article className="skills_card">
              <FaJava className="skills_icon" />
              <div>
              <h4>
                <b>Java</b>
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="skills_card">
              <FaPython className="skills_icon" />
              <div>
              <h4>
                <b>Pyhton</b>
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="skills_card">
              <FaJsSquare className="skills_icon" />
              <div>
              <h4>
                <b>Javascript</b>
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="skills_card">
              <TbBrandMysql className="skills_icon" />
              <div>
              <h4>
                <b>MySQL</b>
              </h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_card">
            <div className="skills_icon" >
              <FaHtml5 /> 
              <FaCss3Alt  />
              </div>
              <div>
              <h4>
                <b>HTML + CSS</b>
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="skills_card">
            <div className="skills_icon" >
              <TbBrandGolang  />
              {" / "}
              <TbBrandCSharp />
              </div>
              <div>
              <h4>
                <b>GO / C#</b>
              </h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      


      <div className="skills_tech">
          <h3>Technologies</h3>


          <h4 className="tech-head"><b>Front-End</b></h4>
          <div className="skills_content">
            <article className="skills_card">
              <FaReact className="skills_icon" />
              <div>
              <h4>
                React
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="skills_card">
              <SiFlutter className="skills_icon" />
              <div>
              <h4>
                Flutter
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <br></br>

            <h4 className="tech-head"><b>Back-End</b></h4>
            <article className="skills_card">
              <FaNodeJs className="skills_icon" />
              <div>
              <h4>
                Node.JS
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="skills_card">
              <FaPhp className="skills_icon" />
              <div>
              <h4>
                <b>PHP</b>
              </h4>
              <small className="text-light">Experienced </small>
              </div>
            </article>

            <article className="skills_card">
              <SiMongodb className="skills_icon" />
              <div>
              <h4>
                <b>MongoDB</b>
              </h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            
          
            </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
