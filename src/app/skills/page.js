"use client"
import React from "react";
import { motion } from "framer-motion";
import { AnimatedBackground } from "animated-backgrounds";
import styles from "./skills.module.css"
import Image from "next/image";

const skills = [
  { name: "HTML", src : "/images/html.png"},
  { name: "JavaScript", src: "/images/Javascript.png" },
  { name: "React", src: "/images/react.png" },
  { name: "NextJS", src: "/images/nextjs.png" },
  { name: "CSS", src : "/images/CSS.png" },
  { name: "Bootstrap", src : "/images/bootstrap.png" },
  { name: "NodeJS", src : "/images/nodejs.png" },
  { name: "MongoDB", src : "/images/mongo.png" },
  
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <AnimatedBackground animationName="cosmicDust" 
            />
      <motion.div 
            className={styles.skillsHeading}
            initial={{ opacity: 0 , x:1500}}
            animate={{ x:0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}>
            <h1 style={{margin:"5px"}}>Skills</h1>
            <p style={{margin:"5px 5px 15px 5px", fontSize:"large"}}>Technologies I have been working with currently</p>
      </motion.div>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillItem}
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0 , x:1500}}
            animate={{ x:0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image src={skill.src} alt={`${skill.name} logo`} height={100} width={100}></Image>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;