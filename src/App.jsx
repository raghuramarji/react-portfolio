import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import BackToTop from './components/BackToTop'
import { HiDesktopComputer } from 'react-icons/hi'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      {/* Desktop Only Message for Mobile/Tablet Users */}
      <div className="desktop-only-message">
        <div className="desktop-only-content">
          <div className="icon">
            <HiDesktopComputer />
          </div>
          <h2>Desktop Experience Only</h2>
          <p>This portfolio is designed for <span className="highlight">desktop viewing</span> to provide the best experience.</p>
          <p>Please visit this site on a <span className="highlight">laptop or desktop computer</span> to explore my work.</p>
          <p>Thank you for your understanding!</p>
          <p style={{marginTop: '20px', fontSize: '0.9rem', color: '#eee5'}}>
            - Raghu Ram Arji
          </p>
        </div>
      </div>
      
      <main>
        <NavBar />
        <Home />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contacts />
        <BackToTop />
      </main>
    </Provider>
  )
}

export default App
