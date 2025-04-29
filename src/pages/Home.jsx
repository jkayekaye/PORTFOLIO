import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Home.css';

function Home() {
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Dream it. Code it. Ship it.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency.",
    "Build what you love, love what you build."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="intro">
        <h1>
          Hello, I'm <span className="highlight">Janelle Kaye Borabo</span>
        </h1>

        <h2 className="typewriter-text">
          <Typewriter
            words={[
              'ESL Teacher',
              'Coding Dreams Into Reality',
              'Future-Focused Technologist',
              'Bringing Imagination to the Web',
              'Turning Coffee Into Code',
              'Maybe not so sure Animator'
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="quote-text">
          "{quotes[currentQuoteIndex]}"
        </p>

        <div className="button-group">
          <Link to="/about" className="home-button">About Me</Link>
          <Link to="/projects" className="home-button">My Projects</Link>
          <Link to="/Resume" className="home-button">Resume</Link>
        </div>

        {/* Connect Section */}
        <div className="connect-section">
          <p className="connect-subtitle">Feel free to connect with me</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/janellekaye.borabo/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://www.instagram.com/jkaye_kaye/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@janellekayeborabo6134" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
