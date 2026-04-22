"use client";
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaBrain, FaTools, FaLink, FaGraduationCap, FaHandsHelping } from 'react-icons/fa';

export default function About() {
  const points = [
    { icon: FaLaptopCode, text: "Full Stack Developer with expertise in Next.js, MERN stack, PHP, and WordPress" },
    { icon: FaServer, text: "Specialized in building custom WordPress themes, plugins, and robust PHP-based backend systems" },
    { icon: FaBrain, text: "Strong programming foundation in C, C++, and C#, with a focus on problem-solving and logic building" },
    { icon: FaTools, text: "Follows modern development best practices: component-based design, API integration, and version control" },
    { icon: FaLink, text: "Experience with tools like Git, Vercel, Render, and Postman" },
    { icon: FaGraduationCap, text: "Always eager to learn new technologies and improve as a developer" },
    { icon: FaHandsHelping, text: "Team player with a love for collaboration, code reviews, and building together" }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title"><span className="highlight">About</span> Me</h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="about-card glass-panel"
        >
          <ul className="about-list">
             {points.map((point, idx) => (
                <li key={idx} className="about-item">
                  <div className="about-icon-container">
                    <point.icon className="about-icon" />
                  </div>
                  <p>{point.text}</p>
                </li>
             ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
