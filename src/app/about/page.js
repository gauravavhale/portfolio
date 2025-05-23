"use client"
import React from "react";
import { motion } from "framer-motion";
import styles from './about.module.css';

const  courses = [
  { name : "MERN Stack", university : "Naresh IT" , from : "April 2024 - July 2024", loc : "Ameerpet, Hyderabad"},
  { name : "Web Development", university : "Naresh IT" , from : "Jan 2024 - March 2024", loc : "Ameerpet, Hyderabad"},
  { name : "Bachellor of Arts", university : "Dr. Babasahebh Ambedkar Marathwada University", from : "June 2019 - February 2022" ,  loc : "Chatrapati Sambhajinagar"},
  { name : "12th", university : "Vivekanand College", from : "June 2017 - February 2019" ,  loc : "Chatrapati Sambhajinagar"},
  { name : "10th", university : "Maharashtra Public School", from : "June 2016 - March 2017" ,  loc : "Chatrapati Sambhajinagar"}]

const About = () => {
  return (
    <section id="about" className={styles.about}> 
      <motion.div
        className={styles.aboutContent}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
          <div>
            <h1>About Me</h1>
            <p>Hi, I’m Gaurav Avhale, a passionate Full Stack Developer from Chhatrapati Sambhajinagar, Maharashtra. 
              I specialize in crafting dynamic, user-friendly web applications using <b> React, Next.js, JavaScript,
              and modern CSS frameworks like Tailwind CSS.</b> My tech journey began with a curiosity for building
              seamless digital experiences, which I’ve honed through hands-on projects. I thrive on transforming 
              ideas into responsive, visually appealing interfaces with clean, efficient code. Beyond coding, 
              I enjoy diving into new technologies and tackling real-world challenges with creative solutions. 
              Explore my projects to see my work in action, and feel free to connect for collaborations or opportunities!</p>
            <motion.button type="submit"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{scale:1.05}}
                  >
                    <a href={"/contact"}>CONTACT</a>
            </motion.button>
          </div>

          <div className={styles.education}>
              <h2>Education</h2>
              {courses.map((course,ind)=>(
                <div className={styles.educationCard} key={ind}>
                  <div>
                    <h3>{course.name}</h3>
                    <p className={styles.university}>{course.university}</p>
                  </div>
                  <div className={styles.details}>
                  <span>{course.from}</span>
                  {course.percentage ? <span className={styles.cgpa}>Percentage : {course.percentage}</span> : ""}
                  <span className={styles.location}>{course.loc}</span>
              </div>
                </div>
              ))
              }
        </div>
      </motion.div>
    </section>
  );
};

export default About;