import React from 'react';
import EventsImage from '../images/EventsImage.jpg';
import './About.css';

/**
 * About Component
 * About Component
 * pupose: Display information about the application.
 */
 function About() {
    return (
        //Main container for the About component
        <div className="about-container">
           {/*About Us and Our Story sections - side by side */}
           <div className="side-by-side-container">
              {/*
                This section now contains both 'About Us' (Mission) and 'Our Team' content,
                making them both appear to the left of the image in the grid layout.
              */}
              <section className='about-section'>
                <h1>About Us</h1>
                <p>Welcome to Snakepiece Event House Kenya, where creativity blends with precision. We are among the top event
                    plannners in Nairobi, recognized for designing luxury events such as weddings, corporate events, private celebrations and social celebrations that are both flawless and unforgettable.

                    With over five years of experience in the event planning industry, our story is rooted in passion, artistry and excellence.
                    From intimate gatherings to large-scale productions, our team turn ideas into experiences that inspire, connect and celebrate life's most meaningful moments.        
                </p>
                
                {/* MOVED: Team Section - now appears immediately below the 'About Us' paragraph 
                */}
                <div className='team-section-in-about-us'>
                    <h2>Our Team</h2>
                    <p>
                        Behind every exceptional event is a dedicated team of creative professionals. Our planners, designers, and coordinators bring years of expertise, artistic vision, and meticulous attention to detail. We're passionate about what we do, and it shows in every event we create.

                        From the initial consultation to the final farewell, our team is committed to providing personalized service, seamless execution, and an experience that's as stress-free as it is spectacular.
                    </p>
                </div>
              </section>

              {/*Story section - company background (The Image container) */}
              <section className='about-section'>
                <div className='about-image'>
                    <img src={EventsImage} alt='SnakePiece Event House'/>
                </div>
               
              </section>
           </div>
           
           {/* REMOVED: The original separate 'Team Section' JSX is deleted from here.
             The 'Our Team' content is now inside the first side-by-side column.
           */}
           
                {/*Values Section - company core principles */}
                <section className='about-section'>
                    <h2>Our Values</h2>
                    <div className='values-grid'>
                        <div className='value-item'>
                            <h3>🚀 Innovation</h3>
                            <p>
                              Innovation drives us. We bring fresh ideas and unique concepts to make your event truly one-of-a-kind.  
                            </p>

                        </div>
                         
                        {/* Value 2: Integrity */}
                        <div className="value-item">
                            <h3>💎 Integrity</h3>
                            <p>We maintain transparency and honesty in all our dealings</p>
                        </div>
                        {/* Value 3: Excellence */}
                        <div className="value-item">
                            <h3>✨ Excellence</h3>
                            <p>We pursue perfection in every detail, ensuring each event exceeds expectations and creates lasting memories.</p>
                        </div>
                         {/* Value 4: Collaboration */}
                        <div className="value-item">
                            <h3>🤝 Patnership</h3>
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