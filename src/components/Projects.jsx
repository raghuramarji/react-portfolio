import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaReact, FaJava, FaProjectDiagram, FaLock } from 'react-icons/fa'
import { MdIntegrationInstructions } from 'react-icons/md'
import '../styling/projects.css'

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "AS2 Trading Partner Integration with BPML",
      description: "Currently learning and building AS2 setups for secure EDI communication with trading partners. Developing BPML workflows to automate business processes and enhance B2B data exchange capabilities.",
      technologies: ["BPML", "AS2", "EDI", "Trading Partner Setup"],
      icon: FaProjectDiagram,
      type: "Process Automation & EDI",
      status: "In Progress"
    },
    {
      id: 2,
      title: "EDI Mapping and Data Transformation",
      description: "Developed EDI mapping solutions using IBM Sterling Integrator for automated data transformation. Created custom maps for various EDI standards to streamline business processes and improve data accuracy.",
      technologies: ["IBM Sterling Integrator", "EDI Mapping", "Data Transformation", "XML"],
      icon: MdIntegrationInstructions,
      type: "EDI Development",
      status: "Completed"
    },
    {
      id: 3,
      title: "Frontend Development Projects",
      description: "Collection of frontend projects showcasing modern web development skills. Projects include: Portfolio website (React), E-commerce platform (Tailwind CSS), and 3D Object Renderer (Three.js) for interactive 3D visualizations.",
      technologies: ["React", "Tailwind CSS", "Three.js", "JavaScript", "HTML/CSS"],
      icon: FaReact,
      type: "Frontend Development",
      status: "Completed",
      subProjects: [
        "Portfolio Website - React",
        "E-commerce Platform - Tailwind CSS",
        "3D Object Renderer - Three.js"
      ]
    },
    {
      id: 4,
      title: "Java Database Applications",
      description: "Developed Java applications with database connectivity demonstrating backend development skills. Created two main systems: Banking Management System for handling customer accounts and transactions, and Attendance Management System for tracking employee attendance records.",
      technologies: ["Java", "MySQL", "JDBC", "Database Design"],
      icon: FaJava,
      type: "Backend Development",
      status: "Completed",
      subProjects: [
        "Banking Management System",
        "Attendance Management System"
      ]
    }
  ])

  return (
    <section className='projects'>
      <div className="title">
        My Projects
      </div>
      <div className="des">
        Here are some of the key projects I've worked on, showcasing my expertise in EDI development, business analysis, and full-stack development. Each project demonstrates practical application of my technical skills in real-world scenarios.
      </div>
      <div className="list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <div className="icon">
                <project.icon />
              </div>
              <div className="project-meta">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
                <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            </div>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            {project.subProjects && (
              <div className="sub-projects">
                <h4>Sub-Projects:</h4>
                <ul>
                  {project.subProjects.map((subProject, index) => (
                    <li key={index}>{subProject}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.id === 1 ? (
                // AS2 Trading Partner - In Development
                <div className="disabled-buttons">
                  <div className="link-btn disabled" title="Still in development - Coming soon!">
                    <FaGithub />
                    View Code
                  </div>
                  <div className="link-btn disabled" title="Still in development - Coming soon!">
                    <FaExternalLinkAlt />
                    Live Demo
                  </div>
                </div>
              ) : project.id === 2 ? (
                // EDI Mapping - Company Privacy
                <div className="disabled-buttons">
                  <FaLock className="lock-icon" />
                  <div className="link-btn disabled" title="Company project - Privacy restrictions apply">
                    <FaGithub />
                    View Code
                  </div>
                  <div className="link-btn disabled" title="Company project - Privacy restrictions apply">
                    <FaExternalLinkAlt />
                    Live Demo
                  </div>
                </div>
              ) : (
                // Active buttons for other projects
                <>
                  <button className="link-btn">
                    <FaGithub />
                    View Code
                  </button>
                  <button className="link-btn">
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
