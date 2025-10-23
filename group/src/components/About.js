import React from 'react';
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
           {/*Mission Section -  explains company purpose */}
              <section className='about-section'>
                <h1>About Us</h1>
                <p>Welcome to Snakepiece Event House Kenya, where creativity blends with precision. We are among the top event
                    plannners in Nairobi, recognized for designing luxury events such as weddings, corporate events, private celebrations and social celebrations that are both flawless and unforgettable.

                    With over five years of experience in the event planning industry, our story is rooted in passion, artistry and excellence.
                    From intimate gatherings to large-scale productions, our team turn ideas into experiences that inspire, connect and celebrate life's most meaningful moments.        
                </p>
              </section>

              {/*Story section - company background */}
                <section className='about-section'>
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2025, my app started as a small team of event enthusiasts with a vision to transform the event planning landscape in Nairobi.
                        over the years, we have grown into full-service event planning firm known for our attention to detail, creativity and commitment to excellence.
                        Our journey has been marked by numerous succesful events, each reflecting our dedication to delivering exceptional experiences.This has been guided by a simple belief: every event, big or small, should be a masterpiece.
                        Over the years, we've had the honor of working with corporate brands, couples, and families who trust us to turn their visions into reality. 
                        What sets us apart is our ability to blend luxury aesthetics with seamless execution, ensuring every detail tells a story.Our commitment to 
                        excellence and innovation has helped us build lasting relationships with our clients.

                    </p>
                </section>

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

                {/*Team Section - brief team introduction*/}
                <section className='about-section'>
                      <h2>Our Team</h2>
                      <p>
                        Behind every exceptional event is a dedicated team of creative professionals. Our planners, designers, and coordinators bring years of expertise, artistic vision, and meticulous attention to detail. We're passionate about what we do, and it shows in every event we create.

                        From the initial consultation to the final farewell, our team is committed to providing personalized service, seamless execution, and an experience that's as stress-free as it is spectacular.
                    </p>

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