import React from 'react'
import './home1.css'

function Home1() {
  return (
    <div className='home1'>
      <section className='home-landing'>
        <div className="bg-square"></div>
        <div className="bg-top"></div>

        <div className="content">
          <h1 className='digital'>
            A Digital Product Studio
            that will Work
          </h1>
          <div className='home-for'>
            For <span>Startups</span> , <span>Enterprise leaders</span> , <span>Media & Publishers</span> and <span>Social Good</span>
          </div>
          <div className='home-buttons'>
            <button className='work-btn'>Our Works</button>
            <button className='contact-btn'>Contact Us</button>
          </div>
          <p>Trusted By 250+ Companies</p>
        </div>
      </section>

      <section className='company'>
        <img src='/home/zapier.png' />
        <img src='/home/spotify.png' />
        <img src='/home/zoom.png' />
        <img src='/home/slack.png' />
        <img src='/home/amazon.png' />
        <img src='/home/adobe.png' />
      </section>
    </div>
  )
}

export default Home1