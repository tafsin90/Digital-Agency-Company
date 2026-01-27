import React from 'react'
import './services.css'

function services() {
    return (
        <div className='service '>
            <section className='service-1 service-head'>
                <div className="bg-square"></div>
                <div className="bg-top2"></div>
                <div className='content2'>
                    <h1>Our Services</h1>
                    <p>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
                </div>
            </section>


            <section className='services'>
                <div className='services-head'>
                    <h1>Design</h1>
                    <p>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. </p>
                    <div>Our design services include:</div>
                </div>

                {/* first part */}
                <h2>User Experience (UX) Design</h2>
                <div className='services-grid'>
                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon.png" />
                        </div>
                        <p>User Research and Persona Development</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (1).png" />
                        </div>
                        <p>Information Architecture and Wireframing</p>
                    </div>
                    <div className='services-card card3'>
                        <div className='services-img'>
                            <img src="/services/Icon (2).png" />
                        </div>
                        <p>Interactive Prototyping and User Testing</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (3).png" />
                        </div>
                        <p>UI Design and Visual Branding</p>
                    </div>
                </div>

                {/* second part */}
                <h2>User Interface (UI) Design</h2>
                <div className='services-grid'>
                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (8).png" />
                        </div>
                        <p>Intuitive and Visually Appealing Interface Design</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (9).png" />
                        </div>
                        <p>Custom Iconography and Illustration</p>
                    </div>
                    <div className='services-card card3'>
                        <div className='services-img'>
                            <img src="/services/Icon (10).png" />
                        </div>
                        <p>Typography and Color Palette Selection</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (11).png" />
                        </div>
                        <p>Responsive Design for Various Devices</p>
                    </div>
                </div>

                {/* third part */}
                <h2>Branding and Identity</h2>
                <div className='services-grid'>
                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (4).png" />
                        </div>
                        <p>Logo Design and Visual Identity Development</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (5).png" />
                        </div>
                        <p>Brand Strategy and Positioning</p>
                    </div>
                    <div className='services-card card3'>
                        <div className='services-img'>
                            <img src="/services/Icon (6).png" />
                        </div>
                        <p>Brand Guidelines and Style Guides</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (7).png" />
                        </div>
                        <p>Marketing Collateral Design (Brochures, Business Cards, etc.)</p>
                    </div>
                </div>
            </section>



            <section className='services'>
                <div className='services-head'>
                    <h1>Engineering</h1>
                    <p>Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.</p>
                    <div>Our design services include:</div>
                </div>

                {/* first part */}
                <h2>Web Development</h2>
                <div className='services-grid'>
                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (12).png" />
                        </div>
                        <p>Front-End Development (HTML, CSS, JavaScript)</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Subtract.png" />
                        </div>
                        <p>Back-End Development (PHP, Python, Ruby)</p>
                    </div>
                    <div className='services-card card3'>
                        <div className='services-img'>
                            <img src="/services/Union.png" />
                        </div>
                        <p>Content Management System (CMS) Development (WordPress, Drupal)</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/light.beacon.min.fill.png" />
                        </div>
                        <p>E-Commerce Platform Development (Magento, Shopify)</p>
                    </div>
                </div>

                {/* second part */}
                <h2>Mobile App Development</h2>
                <div className='services-grid'>
                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (13).png" />
                        </div>
                        <p>Native iOS and Android App Development</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (14).png" />
                        </div>
                        <p>Cross-Platform App Development (React Native, Flutter)</p>
                    </div>
                    <div className='services-card card3'>
                        <div className='services-img'>
                            <img src="/services/Icon (15).png" />
                        </div>
                        <p>App Prototyping and UI/UX Design Integration</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (16).png" />
                        </div>
                        <p>App Testing, Deployment, and Maintenance</p>
                    </div>
                </div>

                {/* third part */}
                <h2>Custom Software Development</h2>
                <div className='services-grid'>
                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (17).png" />
                        </div>
                        <p>Enterprise Software Development</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (18).png" />
                        </div>
                        <p>Custom Web Application Development</p>
                    </div>
                    <div className='services-card card3'>
                        <div className='services-img'>
                            <img src="/services/Icon (19).png" />
                        </div>
                        <p>Integration with Third-Party APIs and Systems</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Icon (20).png" />
                        </div>
                        <p>Legacy System Modernization and Migration</p>
                    </div>
                </div>
            </section>


            <section className='services'>
                <div className='services-head'>
                    <h1>Project Management</h1>
                    <p>Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>
                    <div>Our design services include:</div>
                </div>

                {/* first part */}
                <h2>Project Planning and Scoping</h2>
                <div className='services-grid'>
                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Vector.png" />
                        </div>
                        <p>Requirements Gathering and Analysis</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Vector (1).png" />
                        </div>
                        <p>Project Roadmap and Timeline Development</p>
                    </div>
                    <div className='services-card card3'>
                        <div className='services-img'>
                            <img src="/services/Union (1).png" />
                        </div>
                        <p>Resource Allocation and Task Assignment</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Union (2).png" />
                        </div>
                        <p>Risk Assessment and Mitigation Strategies</p>
                    </div>
                </div>

                {/* second part */}
                <h2>Agile Development</h2>
                <div className='services-grid'>
                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Union (3).png" />
                        </div>
                        <p>Iterative Development and Sprints</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Vector (2).png" />
                        </div>
                        <p>Scrum or Kanban Methodology Implementation</p>
                    </div>
                    <div className='services-card card3'>
                        <div className='services-img'>
                            <img src="/services/Subtract (1).png" />
                        </div>
                        <p>Regular Progress Updates and Demos</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Union (4).png" />
                        </div>
                        <p>Continuous Improvement and Feedback Incorporation</p>
                    </div>
                </div>

                {/* third part */}
                <h2>Quality Assurance and Testing</h2>
                <div className='services-grid'>
                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Union (5).png" />
                        </div>
                        <p>Test Planning and Execution</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Vector (3).png" />
                        </div>
                        <p>Functional and Usability Testing</p>
                    </div>
                    <div className='services-card card3'>
                        <div className='services-img'>
                            <img src="/services/Vector (4).png" />
                        </div>
                        <p>Performance and Security Testing</p>
                    </div>

                    <div className='services-card card1'>
                        <div className='services-img'>
                            <img src="/services/Vector (5).png" />
                        </div>
                        <p>Bug Tracking and Issue Resolution</p>
                    </div>
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

export default services