import React, { useState } from 'react'
import { SiMysql } from "react-icons/si";
import { FaReact, FaJava, FaCode, FaProjectDiagram } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
function Skills() {
  const [listskill] = useState([
    {
      name: "IBM Sterling Integrator",
      des: "Experienced with IBM Sterling Integrator for EDI development and B2B integration. Specialized in mapping, data transformation, and configuring business processes for seamless data exchange between trading partners.",
      img: MdIntegrationInstructions
    },
    {
      name: "BPML",
      des: "Currently learning Business Process Modeling Language (BPML) to enhance my skills in defining and executing complex business processes and workflow automation in enterprise environments.",
      img: FaProjectDiagram
    },
    {
      name: "Java",
      des: "Strong foundation in Java programming with experience in object-oriented programming, data structures, and enterprise application development. Used extensively in EDI development projects and backend systems.",
      img: FaJava
    },
    {
      name: "Frontend Development",
      des: "Proficient in HTML5, CSS3, and JavaScript ES6+. Skilled in creating responsive, accessible web interfaces with modern styling techniques, DOM manipulation, and interactive user experiences.",
      img: FaCode
    },
    {
      name: "React",
      des: "Proficient in building modern, component-based user interfaces with React. I utilize hooks, state management, and component lifecycle to create efficient and scalable frontend applications.",
      img: FaReact
    },
    {
      name: "Database",
      des: "Experienced with MySQL and database design principles. I create efficient queries, optimize database performance, and ensure data integrity for business applications and EDI systems.",
      img: SiMysql
    }
  ])
  return (
    <section className='skills'>
      <div className="title">
        These are my skills
      </div>
      <div className="des">
        As a Software Trainee with hands-on experience in EDI development and business analysis, I've developed proficiency in various technologies to create efficient solutions and bridge technical requirements with business needs.
      </div>
      <div className="list">
        {
          listskill.map((item, key) => (
            <div className="item" key={item.name}>
              <item.img />
              <h3>{item.name}</h3>
              <div className="des">{item.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills
