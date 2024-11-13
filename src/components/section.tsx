"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionProps {
 title?: string
 subtitle?: string
 titleAlt?: string
 id: string
 children: ReactNode
}

export default function Section({ title, subtitle, titleAlt, id, children }: SectionProps) {
 return (
  <motion.section
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ ease: "easeInOut", duration: 1 }}
   className="py-24 max-w-6xl mx-auto"
  >
   {title && <h2 className="text-4xl lg:text-5xl text-center text-slate-500 tracking-wide mb-2" id={id}>{title}</h2>}
   {titleAlt && <h2 className="text-4xl text-center text-slate-500 tracking-wide mb-12" id={id}>{titleAlt}</h2>}
   {subtitle && <h3 className="text-xl lg:text-2xl text-center text-slate-800 tracking-wide mb-12">{subtitle}</h3>}
   {children}
  </motion.section>
 )
}