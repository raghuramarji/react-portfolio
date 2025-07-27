import React, { useState, useEffect } from 'react'
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa'
import { MdIntegrationInstructions, MdAnalytics } from 'react-icons/md'
import '../styling/workExperience.css'

function WorkExperience() {
    const [timeElapsed, setTimeElapsed] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [showAllSkills, setShowAllSkills] = useState(false)

    // Calculate time elapsed since joining
    useEffect(() => {
        const startDate = new Date('2025-01-01') // January 1st, 2025

        const updateTimer = () => {
            const now = new Date()
            const diffTime = Math.abs(now - startDate)

            const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
            const months = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
            const days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((diffTime % (1000 * 60)) / 1000)

            setTimeElapsed({ years, months, days, hours, minutes, seconds })
        }

        // Update immediately
        updateTimer()

        // Update every second
        const interval = setInterval(updateTimer, 1000)

        return () => clearInterval(interval)
    }, [])

    const workExperience = [
        {
            id: 1,
            company: "Miracle Software Systems Inc.",
            position: "Software Trainee",
            location: "Miracle City, Vizag",
            startDate: "January 2025",
            endDate: "Present",
            status: "current",
            description: "Working as a Software Trainee specializing in EDI development using IBM Sterling Integrator and Business Analysis. Gaining hands-on experience in B2B integration, data mapping, and business process optimization.",
            responsibilities: [
                "EDI Development using IBM Sterling Integrator",
                "Business Analysis and Requirements Gathering",
                "Data Mapping and Transformation",
                "Trading Partner Integration",
                "Process Documentation and Testing"
            ],
            technologies: ["IBM Sterling Integrator", "EDI", "BPML", "AS2", "Business Analysis"],
            allTechnologies: [
                "IBM Sterling Integrator", "EDI", "BPML", "AS2", "Business Analysis",
                "React", "JavaScript", "HTML/CSS", "Java", "MySQL", "Database Design",
                "Three.js", "Tailwind CSS", "Frontend Development", "Data Transformation",
                "XML", "Trading Partner Setup", "Process Modeling", "JDBC"
            ],
            achievements: [
                "Successfully completed EDI training program",
                "Contributed to trading partner onboarding processes",
                "Developed understanding of B2B integration patterns"
            ]
        }
    ]

    return (
        <section className='experience'>
            <div className="title">
                Work Experience
            </div>
            <div className="des">
                My professional journey in software development, focusing on EDI development and business analysis. Currently building expertise in enterprise integration solutions.
            </div>

            <div className="timeline-container">
                {workExperience.map((experience) => (
                    <div key={experience.id} className="timeline-item">
                        <div className="timeline-dot">
                            <FaBriefcase />
                        </div>

                        <div className="experience-card">
                            <div className="experience-header">
                                <div className="company-info">
                                    <h3>{experience.company}</h3>
                                    <h4>{experience.position}</h4>
                                    <div className="meta-info">
                                        <span className="location">
                                            <FaMapMarkerAlt />
                                            {experience.location}
                                        </span>
                                        <span className="duration">
                                            <FaCalendarAlt />
                                            {experience.startDate} - {experience.endDate}
                                        </span>
                                        <span className={`status ${experience.status}`}>
                                            {experience.status === 'current' ? 'Currently Working' : 'Completed'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="experience-content">
                                <p className="description">{experience.description}</p>

                                <div className="responsibilities">
                                    <h5>Key Responsibilities:</h5>
                                    <ul>
                                        {experience.responsibilities.map((responsibility, index) => (
                                            <li key={index}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="technologies">
                                    <h5>Technologies & Skills:</h5>
                                    <div className="tech-tags">
                                        {(showAllSkills ? experience.allTechnologies : experience.technologies).map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="tech-toggle">
                                        <button
                                            className="toggle-btn"
                                            onClick={() => setShowAllSkills(!showAllSkills)}
                                        >
                                            {showAllSkills ? (
                                                <>
                                                    <span>Hide</span>
                                                    <span className="toggle-icon">−</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Show More</span>
                                                    <span className="toggle-icon">+</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="achievements">
                                    <h5>Key Achievements:</h5>
                                    <ul>
                                        {experience.achievements.map((achievement, index) => (
                                            <li key={index}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Real-time Timer */}
            <div className="experience-timer">
                <div className="timer-header">
                    <FaClock />
                    <h3>Time at Miracle Software Systems</h3>
                </div>
                <div className="timer-display">
                    <div className="time-unit">
                        <span className="number">{timeElapsed.years}</span>
                        <span className="label">Year{timeElapsed.years !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="time-unit">
                        <span className="number">{timeElapsed.months}</span>
                        <span className="label">Month{timeElapsed.months !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="time-unit">
                        <span className="number">{timeElapsed.days}</span>
                        <span className="label">Day{timeElapsed.days !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="time-unit">
                        <span className="number">{timeElapsed.hours}</span>
                        <span className="label">Hour{timeElapsed.hours !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="time-unit">
                        <span className="number">{timeElapsed.minutes}</span>
                        <span className="label">Minute{timeElapsed.minutes !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="time-unit">
                        <span className="number">{timeElapsed.seconds}</span>
                        <span className="label">Second{timeElapsed.seconds !== 1 ? 's' : ''}</span>
                    </div>
                </div>
                <p className="timer-description">
                    Real-time counter showing my journey as a Software Trainee at Miracle Software Systems
                </p>
            </div>
        </section>
    )
}

export default WorkExperience
