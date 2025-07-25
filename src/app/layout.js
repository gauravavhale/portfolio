"use client"
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Gaurav Avhale | Web Developer Portfolio</title>
        <link rel="icon" href="images/svg.jpg"></link>
        <meta name='theme-color' content='#06c1db'/>
        <meta name="keywords" content="Gaurav Avhale, web developer portfolio, front-end developer, back-end developer, full-stack developer, web development, software developer, JavaScript, React, HTML, CSS, Node.js, portfolio projects, hire developer"></meta>
        <meta name="description" content="Explore Gaurav Avhale's web developer portfolio showcasing innovative projects in JavaScript, React, and full-stack development. Hire me for your next project!"></meta>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"/>
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
