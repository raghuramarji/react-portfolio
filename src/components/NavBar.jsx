import React, { useState, useEffect } from 'react';
import { GiChargedArrow } from "react-icons/gi";
import { connect } from 'react-redux';
import { changeTabActive } from '../redux/action';

function NavBar({ activeTab, changeTabActive }) {
    const [listnav] = useState(['home', 'skills', 'experience', 'projects', 'contacts']);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to section
    const handleNavClick = (value) => {
        changeTabActive(value);

        // Smooth scroll to section
        const section = document.querySelector(`.${value}`);
        if (section) {
            const offsetTop = value === 'home' ? 0 : section.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // Auto-update active tab based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = listnav.map(nav => ({
                name: nav,
                element: document.querySelector(`.${nav}`)
            }));

            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element && scrollPosition >= section.element.offsetTop) {
                    if (activeTab !== section.name) {
                        changeTabActive(section.name);
                    }
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeTab, changeTabActive, listnav]);

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="logo" onClick={() => handleNavClick('home')}>
                <GiChargedArrow id='img' />
                <span className="logo-text">Raghu Ram</span>
            </div>
            <nav>
                {listnav.map((value, key) => (
                    <span
                        key={key}
                        className={activeTab === value ? 'active' : ''}
                        onClick={() => handleNavClick(value)}
                    >
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                    </span>
                ))}
            </nav>
            <div className="nav-indicator">
                <span className={`indicator ${activeTab}`}></span>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
