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
import './App.css'

function App() {
  return (
    <Provider store={store}>
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
