import React from 'react'
import i from '../assets/p2.jpg'
function Home() {
  return (
    <section className='home'>
      <div className="content">
        <div className="name">My name is <span>Raghu Ram Arji</span></div>
        <div className="dis">Passionate Software Trainee with experience as an EDI Developer and Business Analyst. I specialize in  system analysis, and developing efficient software solutions to bridge business requirements with technical implementations.</div>
        <a href="">Download my CV</a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src={i} alt="profile-img" />
          <div className="info">
            <div>Developer</div>
            <div>Vizag</div>
            <div>15/05</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
