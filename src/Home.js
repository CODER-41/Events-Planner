import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import eventImage from "./images/event.jpg";
import expert1 from "./images/1.jpg";
import expert2 from "./images/2.jpg";
import expert3 from "./images/3.webp";
import Chefsmiling from "./images/pic.png";
import Ashleyys from "./images/Ashleyys.png";
import Kenya from "./images/Kenya.jpg";
import safaricom from "./images/safaricom.png";
import Airtel from "./images/Airtel.jpg";
import Husnain from "./images/Husnain.jpeg";
import Quiver from "./images/Quiver.jpg";
import Isuzu from "./images/Isuzu.png";
import toyota from "./images/toyota.jpg";
import EventsImage from "./images/EventsImage.jpg";
import pic from "./images/pic.png";
import Mc from "./images/Mc.png";
import Sn from "./images/Sn.jpg";
import Lx from "./images/Lx.jpg";
import Lr from "./images/Lr.jpg"
import Ph from "./images/Ph.jpg";
import Dl from "./images/Dl.jpg";
import About from './components/About.js';
import Contact from './components/Contact.js';

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero__content">
          <span className="hero__badge">Turning Moments Into Memories!!</span>
          <h1 className="hero__title">
            Celebrate Every Occasion with Style.
          </h1>
          <p className="hero__description">
             From weddings to corporate galas, we craft unforgettable experiences that bring your vision to life.
      Let’s make your next event shine brighter than ever.
          </p>
          <div className="hero__buttons">
            <a href="https://wa.me/254115481953" target="_blank" rel="noopener noreferrer" className="hero__button--primary">
              Plan Your Event
            </a>
            <Link to="/signup" className="hero__button--secondary">View Our Work</Link>
          </div>
        </div>

        <div className="hero__image-container">
          <img 
            src={Chefsmiling} 
            alt="Chef smiling" 
            className="hero__image" 
          />

          <div className="hero__card hero__card--member">
            <div className="card__icon card__icon--member">
             
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A1.5 1.5 0 0118 21.75H6a1.5 1.5 0 01-1.499-1.632z" /></svg>
            </div>
            <div className="card__text">
              <div className="card__title">10.4 K +</div>
              <div className="card__subtitle">Active members</div>
            </div>
          </div>

      
          <div className="hero__card hero__card--experts">
            <div className="card__subtitle">Experts</div>
            <div className="card__avatars">
              <img src={expert1} alt="Expert 1" />
              <img src={expert2} alt="Expert 2" />
              <img src={expert3} alt="Expert 3" />
              <div className="card__avatar-plus">30+</div>
            </div>
          </div>

          <div className="hero__card hero__card--icon">
            <img src={eventImage} alt="Event Icon" className="utensil-icon" />
          </div>

        </div>
      </section>

      <section className="partners">
        <h2 className="partners__title">
          Our Trusted <span>Partners</span>
        </h2>
        <div className="partners__logos">
          <img src={Ashleyys} alt="Ashleyys" />
          <img src={Kenya} alt="Kenya" />
          <img src={safaricom} alt="safaricom" />
          <img src={Airtel} alt="Airtel" />
          <img src={Husnain} alt="Al-husnain" />
          <img src={Quiver} alt="Quiver" />
          <img src={Isuzu} alt="Isuzu" />
          <img src={toyota} alt="toyota" />
        </div>
      </section>

      <section id="rankings" className="rankings-section">
        <h2 className="rankings-title">Best Overall Rankings by Our Clients</h2>
        <div className="rankings-grid">
          <div className="ranking-card">
            <img src={Mc} alt="Professional MC Services" />
            <h4>MC MIDO & DJ PEREZ....</h4>
            <p>DJ Perez and MC Mido are top-rated entertainers known for their energy, chemistry, and ability to captivate any crowd, making every event unforgettable.</p>
          </div>
          <div className="ranking-card">
            <img src={Sn} alt="Catering Excellence" />
            <h4>TASTE THAT TURNS HEADS....</h4>
            <p>Our catering crew doesn’t just serve food,they serve vibes. From finger-licking bites to full-course feasts, we make sure your guests talk about the menu long after they forget the speeches.</p>
          </div>
          <div className="ranking-card">
            <img src={Lx} alt="Isuzu Vehicles" />
            <h4>LUXURY ON WHEELS....</h4>
            <p>The Lexus LX 600 steals the spotlight wherever it goes — sleek design, unmatched comfort, and pure class that leaves every client impressed before the event even begins.</p>
          </div>
          <div className="ranking-card">
            <img src={Lr} alt="Toyota Fleet" />
            <h4>THE BEAST IN A SUIT....</h4>
            <p>The Land Rover Defender Octa blends rugged power with luxury appeal — a favorite among clients who want to arrive in style and make it clear they mean business.</p>
          </div>
          <div className="ranking-card">
            <img src={Ph} alt="Event Photography" />
            <h4>MOMENTS THAT NEVER MISS....</h4>
            <p>Our photography team captures the vibe, not just the pose, every laugh, glance, and spark that makes your event one for the books.</p>
          </div>
          <div className="ranking-card">
            <img src={Dl} alt="Decor & Lighting" />
            <h4>WHERE VIBES MEET VISION....</h4>
            <p>We don’t just decorate, we set moods. From soft glows to bold setups, our décor and lighting turn ordinary spaces into scenes people can’t stop photographing.</p>
          </div>
        </div>
      </section>

      <About />
      <Contact />
    </>
  );
};

export default Home;
