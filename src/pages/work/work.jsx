import React from 'react'
import './work.css'

function Work() {

  const icon = "/work/Vector (Stroke).png";

  const projects = [
    {
      title: "Chic Boutique",
      category: "E-Commerce Platform for Fashion Hub",
      image: "/work/Image.png",
      link: "https://www.chicboutique.com",
      desc: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
    },
    {
      title: "HungryBites",
      category: "Mobile App for Food Delivery Service",
      image: "/work/Image (1).png",
      link: "htttps:/www.hungrybites.com",
      desc: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
    },
    {
      title: "EventMasters",
      category: "Booking and Reservation System for Event Management",
      image: "/work/Image (2).png",
      link: "htttps:/www.eventmasters.com",
      desc: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences."
    },
    {
      title: "ProTech Solutions",
      category: "Custom Software for Workflow Automation",
      image: "/work/Image (3).png",
      link: "htttps:/www.protechsolutions.com",
      desc: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
    },
    {
      title: "Dream Homes Realty",
      category: "Web Portal for Real Estate Listings",
      image: "/work/Image (4).png",
      link: "htttps:/www.dreamhomesrealty.com",
      desc: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
    },
    {
      title: "FitLife Tracker",
      category: "Mobile App for Fitness Tracking",
      image: "/work/Image (5).png",
      link: "htttps:/www.fitlifetracker.com",
      desc: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles."
    },
    {
      title: "Global Logistics Solutions",
      category: "Custom Software for Supply Chain Management",
      image: "/work/Image (6).png",
      link: "htttps:/www.globallogisticssolutions.com",
      desc: "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs."
    },
    {
      title: "EduConnect",
      category: "Educational Platform for Online Learning",
      image: "/work/Image (7).png",
      link: "htttps:/www.educonnect.com",
      desc: "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages."
    },

    {
      title: "WanderWise",
      category: "Mobile App for Travel Planning",
      image: "/work/Image (8).png",
      link: "htttps:/www.wanderwise.com",
      desc: "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations."
    },
    {
      title: "ConnectCRM",
      category: "Web Application for Customer Relationship Management",
      image: "/work/Image (9).png",
      link: "htttps:/www.connectcrm.com",
      desc: "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth."
    }
  ];

  return (
    <div className='work'>
      <section className='service-1 service-head'>
        <div className="bg-square"></div>
        <div className="bg-top2"></div>
        <div className='content2'>
          <h1>Our Works</h1>
          <p>Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.</p>
        </div>
      </section>

      <section className='work-para'>
        <div className='services-head'>
          <h1>At SquareUp</h1>
          <p>We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
          <div>Here are ten examples of our notable works:</div>
        </div>
      </section>


      <section className='work-cards'>
        <div className="workcard-grid">

          {projects.map((item, index) => (

            <div className="work-card" key={index}>

              <div className='workcard-head'>
                {item.category}
              </div>

              <div className='workcard-body'>
                <div className="workcard-img">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="workcard-content">

                  <div className="workcard-title">
                    <div className='workcard-titleLink'>
                      <h3>{item.title}</h3>
                      <a className="visit-btn-link" href={item.link} target="_blank">
                        {item.link}
                      </a>
                    </div>

                    <a className="visit-btn" href={item.link}
                      target="_blank">
                      <img src={icon}/>
                    </a>
                  </div>

                  <p>{item.desc}</p>

                </div>
              </div>

            </div>

          ))}

        </div>
      </section>


      <section className='let-us'>
                <div className='thank-you'>
                    <div className="bg-square"></div>
                    <div className="bg-top6"></div>
                    <div className='content3'>
                        <div className='nav-img form-img'>
                            <img src='/home/nav-Logo.png' />
                        </div>

                        <div className='contentTY contentTY-ser'>
                            <h1>Let us Bring your Ideas to Life in the Digital World.</h1>
                            <p>No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</p>
                        </div>

                        <div className='start-btn'>Start Project</div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Work