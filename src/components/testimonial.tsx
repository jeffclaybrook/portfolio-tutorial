"use client"

import { motion } from "framer-motion"

interface TestimonialProps {
 quote: string
 name: string
 title: string
 image: string
}

export default function Testimonial({ quote, name, title, image }: TestimonialProps) {
 return (
  <motion.article
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ ease: "easeInOut", duration: 1 }}
   style={{ backgroundImage: `url(${image})` }}
   className="hero max-w-6xl mx-auto rounded-3xl overflow-hidden text-slate-200"
  >
   <div className="hero-overlay flex flex-col justify-center bg-opacity-70 p-6 min-h-[260px]">
    <h3 className="text-2xl tracking-wide mb-3 5">{quote}</h3>
    <h4 className="text-lg tracking-wide mb-1">-{name}</h4>
    <h5 className="text-base tracking-wide font-medium">{title}</h5>
   </div>
  </motion.article>
 )
}