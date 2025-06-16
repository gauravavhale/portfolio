"use client"
import React from "react";
import { motion } from "framer-motion";
import styles from "./projects.module.css"
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce App",
    desc: "A responsive online store",
    stack: "React, Redux, Next.js, Bootstrap, jQuery",
    demo: "https://swift-cart-gaurav-avhales-projects.vercel.app/",
  },
  {
    title: "Portfolio Site",
    desc: "This very site!",
    stack: "Javascript, React, CSS",
    demo: "https://example.com",
  },
  
  {
    title: "Expense Tracker",
    desc: "A responsive online Expense Tracker",
    stack: "Javascript, React",
    demo: "https://expense-tracker-git-main-gaurav-avhales-projects.vercel.app/",
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
      >
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.div whileHover={{ scale: 1.05 }} key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <p><strong>Tech :</strong> {project.stack}</p>
            <Link style={{textDecoration:'underline', color:"grey"}} href={project.demo} target="_blank" rel="noopener noreferrer">
              View Demo
            </Link>
          </motion.div>
        ))}
      </div>
      </motion.div>
      
    </section>
  );
};

export default Projects;