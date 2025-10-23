import React from 'react';
import './Home.css'; 
import eventImage from "./event.jpg";
import expert1 from "./1.jpg";
import expert2 from "./2.jpg"; 
import expert3 from "./3.webp";
import Chefsmiling from "./pic.png";
import Ashleyys from "./Ashleyys.png";
import Kenya from "./Kenya.jpg";
import safaricom from "./safaricom.png";
import Airtel from "./Airtel.jpg";
import Husnain from "./Husnain.jpeg";
import Quiver from "./Quiver.jpg";
import Isuzu from "./Isuzu.png";
import toyota from "./toyota.jpg";

const Home = () => {
  return (
    <>
      <section className="hero">
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
            <a href="https://wa.me/254115481953" target="_self" rel="noopener noreferrer" className="hero__button--primary">
              Plan Your Event
            </a>
            <button className="hero__button--secondary">View Our Work</button>
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
    </>
  );
};

export default Home;