"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <p className="greeting">Hi, Muhammad Saad here...</p>
          <h1 className="title">I'm a <span className="highlight">Full Stack</span><br />Developer</h1>
          <p className="description">
            I build dynamic, scalable, and user-focused web applications using modern technologies.
            With expertise in both front-end and back-end development, I create seamless digital experiences from concept to deployment.
          </p>
          <div className="social-links">
            <a href="https://github.com/M-Saad257/" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/muhammadsaad997/" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
            <a href="https://www.fiverr.com/saadi804" target="_blank" rel="noreferrer" className="social-icon" title="Fiverr"><SiFiverr /></a>
            <a href="mailto:saad.procoder@gmail.com" className="social-icon"><FaEnvelope /></a>
          </div>
          <div className='links'>
            <a href="#contact" className="cta-btn">Let's Talk</a>
            <a href="/Saad-Resume.pdf" target='_blank' className="cta-btn">View Resume</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-container"
        >
          <div className="image-glow"></div>
          <img src="/profile.png" alt="Muhammad Saad" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
}
