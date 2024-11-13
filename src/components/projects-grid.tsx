"use client"

import Project from "./project"
import { motion } from "framer-motion"
import { projects } from "@/lib/data"

export default function ProjectsGrid() {
 return (
  <motion.div
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ ease: "easeInOut", duration: 1 }}
   className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5"
   aria-labelledby="projects"
  >
   {projects.map((project, i) => (
    <Project
     key={i}
     title={project.title}
     href={project.href}
     image={project.image}
    />
   ))}
  </motion.div>
 )
}