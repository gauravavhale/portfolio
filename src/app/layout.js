"use client"
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Gaurav Avhale | Fullstack Developer</title>
        <link rel="icon" href="images/svg.jpg"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"/>
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
