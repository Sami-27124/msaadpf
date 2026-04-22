"use client";
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title"><span className="highlight">Experience</span></h2>
        <div className="timeline">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="timeline-item glass-panel"
          >
            <div className="timeline-icon"><FaBriefcase /></div>
            <div className="timeline-content">
              <h3>PHP & WordPress Developer</h3>
              <span className="timeline-date">2023 – Present | Freelance</span>
              <ul>
                <li>Developed custom WordPress themes and plugins for diverse client needs</li>
                <li>Optimized website performance and SEO for WordPress-based platforms</li>
                <li>Worked on custom PHP web applications and database integrations</li>
                <li>Maintained and updated existing WordPress sites ensuring security and speed</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="timeline-item glass-panel"
          >
            <div className="timeline-icon"><FaBriefcase /></div>
            <div className="timeline-content">
              <h3>Full Stack Web Developer</h3>
              <span className="timeline-date">Jan 2025 – Present | Freelance / Personal Projects</span>
              <ul>
                <li>Built and deployed high-performance full-stack apps using MERN and Next.js</li>
                <li>Leveraged Supabase and MongoDB for scalable database solutions</li>
                <li>Implemented real-time features, secure authentication, and seamless API integrations</li>
                <li>Deployed frontend (Vercel) and backend (Render) with CI/CD setup</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="timeline-item glass-panel"
          >
            <div className="timeline-icon"><FaGraduationCap /></div>
            <div className="timeline-content">
              <h3>Frontend Developer (Intern)</h3>
              <span className="timeline-date">Jun 2024 – Dec 2025 | Self-Led Projects</span>
              <ul>
                <li>Developed responsive websites using HTML, CSS, and JavaScript</li>
                <li>Focused on pixel-perfect UI and cross-browser compatibility</li>
                <li>Practiced Git version control and collaborative workflows</li>
                <li>Created mini-projects like calculators, landing pages, and blog UIs</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
