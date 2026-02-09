"use client"
import React from "react";
import { Hero } from "@/components/Hero/Hero"
import { Projects } from "@/components/ProjectsSection/Projects"
import { Experience } from "@/components/Experience/Experience"
import { Contact } from "@/components/Contact/Contact"
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      {/* <Sidebar> */}
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      {/* </Sidebar> */}
    </div>
  )
}