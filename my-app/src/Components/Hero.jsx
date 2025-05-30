import React from 'react';
import './Hero.css'; // Import the CSS file

const Hero = () => {
    return (
        <section className="hero">
            <div>
                <h1 className="hero-title">RICKFALTON ODHIAMBO</h1>
                <p className="hero-subtitle">Bio</p>
                <p className="hero-subtitle">SKILLS</p>
                <button className="hero-button">Learn More</button>
            </div>
        </section>
    );
};

export default Hero;