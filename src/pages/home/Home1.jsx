import React from 'react'
import './home1.css'

function Home1() {
  return (
    <div className='home1'>

      <section className='home-landing'>
        <div className="bg-square"></div>
        <div className="bg-top1"></div>

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


      <section className='service-head'>
        <div className="bg-square"></div>
        <div className="bg-top2"></div>
        <div className='content2'>
          <h1>Our Services</h1>
          <p>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
        </div>
      </section>

      <section className='service-body'>
        <div className='service-body-card'>
          <div className='service-body-details'>
            <div className='logo-container'>
              <img src='/home/design.png' />
            </div>
            <div className='service-body-text'>
              <h3>Design</h3>
              <p>
                At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.
              </p>
            </div>
          </div>
          <button>Learn More</button>
        </div>


        <div className='service-body-card crd2'>
          <div className='service-body-details'>
            <div className='logo-container'>
              <img src='/home/engineering.png' />
            </div>
            <div className='service-body-text'>
              <h3>Engineering</h3>
              <p>
                Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.
              </p>
            </div>
          </div>
          <button>Learn More</button>
        </div>


        <div className='service-body-card'>
          <div className='service-body-details'>
            <div className='logo-container'>
              <img src='/home/project-mng.png' />
            </div>
            <div className='service-body-text'>
              <h3>Project Management</h3>
              <p>
                Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.
              </p>
            </div>
          </div>
          <button>Learn More</button>
        </div>
      </section>

      <section className='why-choose'>
        <div className='why-head'>
          <div className="bg-square"></div>
          <div className="bg-top3"></div>
          <div className='content2'>
            <h1>Why Choose SquareUp?</h1>
            <p>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
          </div>
        </div>

        <div className='why-body'>
          <div className='why-grid'>

            <div className='why-card wc1'>
              <div className='why-card-top'>
                <div className='logo-container'>
                  <img src='/home/experties.png' />
                </div>
                <h3>Expertise</h3>
              </div>
              <p>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>
            </div>

            <div className='why-card wc1'>
              <div className='why-card-top'>
                <div className='logo-container'>
                  <img src='/home/client.png' />
                </div>
                <h3>Client-Centric Approach</h3>
              </div>
              <p>We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.</p>
            </div>

            <div className='why-card wc3'>
              <div className='why-card-top'>
                <div className='logo-container'>
                  <img src='/home/result.png' />
                </div>
                <h3>Results-Driven Solutions</h3>
              </div>
              <p>Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.</p>
            </div>

            <div className='why-card wc4'>
              <div className='why-card-top'>
                <div className='logo-container'>
                  <img src='/home/partnership.png' />
                </div>
                <h3>Collaborative Partnership</h3>
              </div>
              <p>We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home1