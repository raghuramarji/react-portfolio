import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import '../styling/backToTop.css'

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={`back-to-top ${isVisible ? 'visible' : ''}`}>
            <button onClick={scrollToTop} aria-label="Back to top">
                <FaArrowUp />
            </button>
        </div>
    )
}

export default BackToTop
