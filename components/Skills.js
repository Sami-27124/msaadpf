"use client";
import { motion } from 'framer-motion';
import { SiC, SiCplusplus, SiHtml5, SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiNextdotjs, SiSupabase, SiGithub, SiPhp, SiWordpress } from 'react-icons/si';
import { FaCode, FaCss3Alt } from 'react-icons/fa';

const skills = [
  { name: 'C Language', icon: SiC, color: '#A8B9CC' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'C#', icon: FaCode, color: '#239120' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express JS', icon: SiExpress, color: '#FFFFFF' },
  { name: 'React JS', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Node JS', icon: SiNodedotjs, color: '#339933' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Github', icon: SiGithub, color: '#d0d0d0ff' },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-alt">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        <h2 className="section-title">My <span className="highlight">Skills</span></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card glass-panel"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <skill.icon className="skill-icon" style={{ color: skill.color }} />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
