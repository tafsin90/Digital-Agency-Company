import React, { useState } from 'react'
import './home1.css'
import './home2.css'

function Home2() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "What services does SquareUp provide?",
            answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
        },
        {
            id: 2,
            question: "How can SquareUp help my business?",
            answer: "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex custom software solution could take 3-6 months. We provide detailed timelines during the initial consultation."
        },
        {
            id: 3,
            question: "What industries does SquareUp work with?",
            answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, timeline, and specific requirements. Contact us for a customized quote."
        },
        {
            id: 4,
            question: "How long does it take to complete a project with SquareUp?",
            answer: "Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, updates, security patches, and technical support. We can customize a support plan that fits your needs."
        },
        {
            id: 5,
            question: "Do you offer ongoing support and maintenance after the project is completed?",
            answer: "Absolutely! We excel at collaborating with in-house teams. We can integrate seamlessly with your existing workflows, provide technical guidance, and work as an extension of your team."
        },
        {
            id: 6,
            question: "Can you work with existing design or development frameworks?",
            answer: "We work with a wide range of modern technologies including React, Node.js, Python, mobile frameworks (React Native, Flutter), cloud platforms (AWS, Azure), and various design tools. We stay current with industry best practices."
        },
        {
            id: 7,
            question: "How involved will I be in the project development process?",
            answer: "We follow rigorous quality assurance processes including code reviews, automated testing, user acceptance testing, and regular client check-ins. Our team maintains high standards throughout the development lifecycle."
        },
        {
            id: 8,
            question: "Can you help with website or app maintenance and updates?",
            answer: "Our process begins with a discovery call to understand your needs, followed by a detailed proposal, project planning, and kickoff meeting. We maintain transparent communication throughout the project with regular updates and milestones."
        }
    ];

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='home2'>
            <section className='review'>
                <div className='review-head'>
                    <div className="bg-square"></div>
                    <div className="bg-top4"></div>
                    <div className='content2'>
                        <h1>Why Choose SquareUp?</h1>
                        <p>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
                    </div>
                </div>

                <div className='review-body'>
                    <div className='review-body-card rbc1'>
                        <div className='review-body-content'>
                            <div className='reviewer-text-cont'>
                                <h1>SquareUp has been Instrumental in Transforming our Online Presence. </h1>
                                <p>Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.</p>
                            </div>

                            <div className='reviewer-container'>
                                <div className='reviewer-left'>
                                    <img src='/home/john.png' />
                                    <div className='reviewer-details'>
                                        <p className='reviewer-name'>John Smith</p>
                                        <p className='reviewer-desig'>CEO of Chic Boutique</p>
                                    </div>
                                </div>
                                <div className='review-btn'>Open Website</div>
                            </div>
                        </div>
                    </div>

                    <div className='review-body-card rbc2'>
                        <div className='review-body-content'>
                            <div className='reviewer-text-cont'>
                                <h1>Working with SquareUp was a breeze. </h1>
                                <p>They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.</p>
                            </div>

                            <div className='reviewer-container'>
                                <div className='reviewer-left'>
                                    <img src='/home/sarah.png' />
                                    <div className='reviewer-details'>
                                        <p className='reviewer-name'>Sarah Johnson</p>
                                        <p className='reviewer-desig'>Founder of HungryBites.</p>
                                    </div>
                                </div>
                                <div className='review-btn'>Open Website</div>
                            </div>
                        </div>
                    </div>

                    <div className='review-body-card rbc3'>
                        <div className='review-body-content'>
                            <div className='reviewer-text-cont'>
                                <h1>SquareUp developed a comprehensive booking and reservation system for our event management company</h1>
                                <p>Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.</p>
                            </div>

                            <div className='reviewer-container'>
                                <div className='reviewer-left'>
                                    <img src='/home/mark.png' />
                                    <div className='reviewer-details'>
                                        <p className='reviewer-name'>Mark Thompson</p>
                                        <p className='reviewer-desig'>CEO of EventMasters</p>
                                    </div>
                                </div>
                                <div className='review-btn'>Open Website</div>
                            </div>
                        </div>
                    </div>

                    <div className='review-body-card rbc4'>
                        <div className='review-body-content'>
                            <div className='reviewer-text-cont'>
                                <h1>ProTech Solutions turned to SquareUp to automate our workflow</h1>
                                <p>They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.</p>
                            </div>

                            <div className='reviewer-container'>
                                <div className='reviewer-left'>
                                    <img src='/home/laura.png' />
                                    <div className='reviewer-details'>
                                        <p className='reviewer-name'>Laura Adams</p>
                                        <p className='reviewer-desig'>COO of ProTech Solutions.</p>
                                    </div>
                                </div>
                                <div className='review-btn'>Open Website</div>
                            </div>
                        </div>
                    </div>

                    <div className='review-body-card rbc5'>
                        <div className='review-body-content'>
                            <div className='reviewer-text-cont'>
                                <h1>SquareUp designed and developed a captivating web portal for showcasing our real estate listings.</h1>
                                <p>The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.</p>
                            </div>

                            <div className='reviewer-container'>
                                <div className='reviewer-left'>
                                    <img src='/home/michael.png' />
                                    <div className='reviewer-details'>
                                        <p className='reviewer-name'>Michael Anderson</p>
                                        <p className='reviewer-desig'>Founder of Dream Homes Realty.</p>
                                    </div>
                                </div>
                                <div className='review-btn'>Open Website</div>
                            </div>
                        </div>
                    </div>

                    <div className='review-body-card rbc6'>
                        <div className='review-body-content'>
                            <div className='reviewer-text-cont'>
                                <h1>FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.</h1>
                                <p>SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.</p>
                            </div>

                            <div className='reviewer-container'>
                                <div className='reviewer-left'>
                                    <img src='/home/emily.png' />
                                    <div className='reviewer-details'>
                                        <p className='reviewer-name'>Emily Turner</p>
                                        <p className='reviewer-desig'>CEO of FitLife Tracker</p>
                                    </div>
                                </div>
                                <div className='review-btn'>Open Website</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className='faq'>
                <div className='faq-head'>
                    <div className="bg-square"></div>
                    <div className="bg-top5"></div>
                    <div className='content2'>
                        <h1>Frequently Asked Questions</h1>
                        <p>Still you have any questions? Contact our Team via hello@squareup.com</p>
                    </div>
                </div>

                <div className='faq-body'>
                    {faqData.map((faq, index) => (
                        <div key={faq.id} className='faq-item'>
                            <div className='faq-card'>
                                <div className='faq-left'>
                                    <div className='faq-count'>{String(faq.id).padStart(2, '0')}</div>
                                    <div className='faq-question'>
                                        {faq.question}
                                    </div>
                                </div>
                                <div
                                    className='faq-right'
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {expandedIndex === index ? '×' : '+'}
                                </div>
                            </div>
                            <div className={`faq-answer ${expandedIndex === index ? 'faq-answer-expanded' : ''}`}>
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className='contact'>
                <div className='thank-you'>
                    <div className="bg-square"></div>
                    <div className="bg-top6"></div>
                    <div className='content3'>
                        <div className='nav-img form-img'>
                            <img src='/home/nav-Logo.png' />
                        </div>

                        <div className='contentTY'>
                            <h1>Thank you for your Interest in SquareUp.</h1>
                            <p>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
                        </div>

                        <div className='start-btn'>Start Project</div>
                    </div>
                </div>


                <form id='frm' className='contact-form'>
                    <div className='identity'>
                        <div className='inputfield'>
                            <label>Full Name</label>
                            <input
                                type='text'
                                placeholder='type here'></input>
                        </div>
                        <div className='inputfield'>
                            <label>Email</label>
                            <input
                                type='email'
                                placeholder='type here'></input>
                        </div>
                    </div>

                    <div className='reason'>
                        <h3>why are you contacting us?</h3>
                        <div className='why-checkbox'>
                            <div>
                                <input type="checkbox" />
                                <label>web design</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label>web design</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label>web design</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label>web design</label>
                            </div>
                        </div>
                    </div>

                    <div className='budget'>
                        <h3>Your Budget</h3>
                        <p className="sub">Slide to indicate your budget range</p>
                        <div className='range-wrapper'>
                            <input type="range" />
                            <input type="range" />
                        </div>
                        <div className="budget-values">
                            <span>$1000</span>
                            <span>$5000</span>
                        </div>
                    </div>
                    <div className="box">
                        <h3>Your Message</h3>
                        <textarea placeholder="Type here"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>

    )
}

export default Home2