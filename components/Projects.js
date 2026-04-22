"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Convertix Studio",
    description: "A top-tier web development and affiliate marketing agency platform with modern UI/UX.",
    features: ["Next.js", "SEO Optimized", "High Performance"],
    demo: "https://convertixstudio.vercel.app/",
    github: "https://github.com/M-Saad257/Convertix-Studio"
  },
  {
    title: "Pixel Nest",
    description: "A digital product store for prints and creative assets.",
    features: ["Next.js", "Digital Store", "Supabase"],
    demo: "https://pixelnestprints.vercel.app/",
    github: "https://github.com/M-Saad257/PixelNest"
  },
  {
    title: "Street Eats",
    description: "A fast food wraps ordering platform with a dynamic, appetizing interface.",
    features: ["Next.js", "E-commerce", "Responsive"],
    demo: "https://thestreeteats.vercel.app",
    github: "https://github.com/M-Saad257/StreatEats"
  },
  {
    title: "Urban Drip",
    description: "A stylish online clothing store featuring a sleek shopping experience.",
    features: ["Next.js", "E-commerce", "Modern UI"],
    demo: "https://urbandrip.vercel.app",
    github: "https://github.com/M-Saad257/UrbanDrip"
  },
  {
    title: "Prestigious Academy",
    description: "An educational platform designed for academic excellence and smooth user experience.",
    features: ["Next.js", "Education", "Clean Design"],
    demo: "https://prestigiousacademy-demo.vercel.app/",
    github: "#"
  },
  {
    title: "KC Tech",
    description: "A modern e-commerce shop for laptops and tech accessories.",
    features: ["Next.js", "Tech Store", "E-commerce"],
    demo: "https://kctech-demo.vercel.app/",
    github: "https://github.com/M-Saad257/Prestigious-Academy"
  },
  {
    title: "GritFit Gym",
    description: "A high-energy fitness and gym website to attract and engage members.",
    features: ["Next.js", "Fitness", "Dynamic UI"],
    demo: "https://gritfitgym.vercel.app/",
    github: "https://github.com/M-Saad257/Gritfit"
  },
  {
    title: "KheriMart",
    description: "A fully functional MERN stack e-commerce site for selling chappals. Includes product pages, cart, checkout, and admin dashboard.",
    features: ["React router", "MongoDB & Express", "Image upload", "Real-time updates"],
    github: "https://github.com/M-Saad257/kherimart"
  },
  {
    title: "Techie Blog",
    description: "A modern blog platform with real-time likes and admin analytics. Built with Socket.IO, React, and MongoDB.",
    features: ["Admin panel", "Real-time likes", "Comment system"],
    github: "https://github.com/M-Saad257/techie-blog"
  },
  {
    title: "Super-Chat",
    description: "A real-time chat application.",
    features: ["JavaScript", "Real-time communication"],
    github: "https://github.com/M-Saad257/Super-Chat"
  },
  {
    title: "Crudify",
    description: "A functional CRUD application for managing data.",
    features: ["JavaScript", "Data Management"],
    github: "https://github.com/M-Saad257/Crudify"
  },
  {
    title: "Netflix",
    description: "A Netflix interface clone focusing on UI and responsive design.",
    features: ["CSS", "Responsive Design"],
    github: "https://github.com/M-Saad257/Netflix"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="project-card glass-panel"
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-features">
                  {project.features.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      <FaGithub /> Source Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
