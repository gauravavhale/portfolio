"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { AnimatedBackground } from "animated-backgrounds";
import styles from './contact.module.css'
import Link from "next/link";

const Contact = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    reset()}; // Replace with actual submission logic

  return (
    <section id="contact" className={styles.contact}>
      <motion.h2 initial={{ opacity: 0 , y:100}}
            animate={{opacity: 1,y:0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}>Get In Touch</motion.h2>
      <AnimatedBackground animationName="auroraBorealis" blendMode="hard-light" />
      <div>
        <motion.form
            className={styles.contactForm}
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 , y:100}}
            animate={{opacity: 1,y:0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
      >
        <div className={styles.header}>
          <h3>Send me a message</h3>
          <p>Fill out the form below and I will get back to you as soon as possible.</p>
        </div>
        <input {...register("name")} placeholder="Name" autoComplete="off" required />
        <input {...register("email")} placeholder="Email" type="email" autoComplete="off" required />
        <textarea {...register("message")} placeholder="Message" required autoComplete="off" />
        <motion.button type="submit"
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
      </div>
      

      <div>
        <motion.form
        className={styles.contactForm}
            initial={{ opacity: 0 , y:100}}
            animate={{opacity: 1,y:0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
      >
        <div className={styles.header}>
          <h3>Connect with me</h3>
          <p>You can also reach out to me directly through these channels.</p>
        </div>
        <Link href={"https://www.linkedin.com/in/gaurav-avhale-631690313/"}>
          <i className="bi bi-linkedin"></i>
          <div>
            <h3>Linkedin</h3>
            <p>www.linkedin.com/in/gaurav-avhale-631690313/</p>
          </div>
        </Link>

        <Link href={"mailto:avhalegaurav07@gmail.com"}>
          <i className="bi bi-envelope"></i>
          <div>
            <h3>Email</h3>
            <p>avhalegaurav07@gmail.com</p>
          </div>
        </Link>

        <Link href={"tel:+918698873705"}>
          <i className="bi bi-telephone"></i>
          <div>
            <h3>Phone</h3>
            <p>+918698873705</p>
          </div>
        </Link>

        <Link href={"https://www.instagram.com/gaurav.avhale_18?igsh=enlkYnRjd3dtOGty"}>
          <i className="bi bi-instagram"></i>
          <div>
            <h3>Instagram</h3>
            <p>www.instagram.com/gaurav.avhale_18</p>
          </div>
        </Link>

      </motion.form>
      </div>
    </section>
  );
};
export default Contact;
