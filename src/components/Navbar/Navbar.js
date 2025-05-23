"use client"
import React, { useState, useEffect } from "react";
import { easeOut, motion } from "framer-motion";
import Link from "next/link";
import styles from "./Navbar.module.css"

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img 
      whileHover={{ scale: 1.2 }}
      initial={{ opacity: 0 , x:1500}} 
      animate={{ x:0, rotate:360}} 
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6}} 
      viewport={{ once: true }}
      className={styles.navbarBrand} 
      src="images/brandName.png">
      </motion.img>

       <div className={`${styles['hamburger']} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles['navbar-links']} ${isOpen ? styles.active : ''}`}>
        <li><Link onClick={toggleMenu} href="/">Home</Link></li>
        <li><Link onClick={toggleMenu} href="/about">About</Link></li>
        <li><Link onClick={toggleMenu} href="/projects">Projects</Link></li>
        <li><Link onClick={toggleMenu} href="/skills">Skills</Link></li>
        <li><Link onClick={toggleMenu} href="/contact">Contact</Link></li>
      </ul>
    </motion.nav>
  );
};
