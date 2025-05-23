"use client"
import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import { AnimatedBackground } from "animated-backgrounds";
import styles from "./page.module.css"
import Image from "next/image";

export default function App() {
  return (
    <section id="home" className={styles.home}>
      <AnimatedBackground animationName="cosmicDust" 
      />
        <motion.div
        className={styles.homeContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}    
      >
        <div className={styles.homeContainer}>
        <div className={styles.imageWrapper}>
          <Image src="/images/cv-image6.png" alt="Profile" className={styles.aboutImg} width={200} height={200}/>
        </div>
        <div className={styles.info}>
          <h1>Hi, I am Gaurav Avhale.👋 I develop things for Web!</h1>
          <h2>
          <ReactTyped strings={[" Web Developer " , "  Full Stack Developer" , " MERN Stack Developer "]} typeSpeed={40} backSpeed={50} loop/>
          </h2>
          <div className={styles.ctaButton}>
           <Link href={"/projects"}>View My Work<i className="bi bi-arrow-right-short"></i></Link>
           <Link href="/Gaurav_Avhale_Resume.pdf" download="Gaurav_Avhale_Resume.pdf" target="_blank"> 
                  Resume<i className="bi bi-download"></i>
           </Link>
        </div>
        </div>
        
        </div>
      </motion.div>
      
    </section>
  );
};







