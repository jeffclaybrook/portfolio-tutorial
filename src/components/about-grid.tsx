"use client"

import Card from "./card"
import { motion } from "framer-motion"
import { about } from "@/lib/data"

export default function AboutGrid() {
 return (
  <motion.div
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ ease: "easeInOut", duration: 1 }}
   className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5"
   aria-labelledby="about"
  >
   {about.map((about, i) => (
    <Card
     key={i}
     title={about.title}
     subtitle={about.subtitle}
     icon={<about.icon />}
    />
   ))}
  </motion.div>
 )
}