import React from 'react';
import aboutImage from '../images/About.png';
import innovationIcon from '../images/Innovation.png';
import integrityIcon from '../images/Integrity.jpg';
import excellenceIcon from '../images/Excellence.jpg';
import partnershipIcon from '../images/Partnership.png';
import './About.css';

 function About() {
    return (
        <div className="about-container" id="about">
           <div className="side-by-side-container">
              <section className='about-section'>
                <h1>About Us</h1>
                <p>Welcome to Snakepiece Event House Kenya, where creativity blends with precision. We are among the top event
                    plannners in Nairobi, recognized for designing luxury events such as weddings, corporate events, private celebrations and social celebrations that are both flawless and unforgettable.

                    With over five years of experience in the event planning industry, our story is rooted in passion, artistry and excellence.
                    From intimate gatherings to large-scale productions, our team turn ideas into experiences that inspire, connect and celebrate life's most meaningful moments.        
                </p>
                
                <div className='team-section-in-about-us'>
                    <h2>Our Team</h2>
                    <p>
                        Behind every exceptional event is a dedicated team of creative professionals. Our planners, designers, and coordinators bring years of expertise, artistic vision, and meticulous attention to detail. We're passionate about what we do, and it shows in every event we create.

                        From the initial consultation to the final farewell, our team is committed to providing personalized service, seamless execution, and an experience that's as stress-free as it is spectacular.
                    </p>
                </div>
              </section>

              <section className='about-section'>
                <div className='about-image'>
                    <img src={aboutImage} alt='SnakePiece Event House'/>
                </div>

              </section>
           </div>
           
                <section className='about-section'>
                    <h2>Our Values</h2>
                    <div className='values-grid'>
                        <div className='value-item'>
                            <img src={innovationIcon} alt="Innovation" className='value-icon' />
                            <h3>Innovation</h3>
                            <p>
                              Innovation drives us. We bring fresh ideas and unique concepts to make your event truly one-of-a-kind.
                            </p>

                        </div>


                        <div className="value-item">
                            <img src={integrityIcon} alt="Integrity" className='value-icon' />
                            <h3>Integrity</h3>
                            <p>We maintain transparency and honesty in all our dealings</p>
                        </div>

                        <div className="value-item">
                            <img src={excellenceIcon} alt="Excellence" className='value-icon' />
                            <h3>Excellence</h3>
                            <p>We pursue perfection in every detail, ensuring each event exceeds expectations and creates lasting memories.</p>
                        </div>

                        <div className="value-item">
                            <img src={partnershipIcon} alt="Partnership" className='value-icon' />
                            <h3>Partnership</h3>
                            <p>Your vision is our mission. We work closely with clients to understand and bring their dreams to life.</p>
                        </div>
                    </div>          
                    
                </section>

                <section className='about-section'>
                    <div class="cta-section">
                        <h2>Let's Create Something Extraordinary</h2>
                        <p>Ready to bring your vision to life? We'd love to hear about your upcoming event.</p>
                        <a href="#contact" class="cta-button">Get In Touch</a>
                    </div>
                </section>


        </div>
    );
}
export default About;