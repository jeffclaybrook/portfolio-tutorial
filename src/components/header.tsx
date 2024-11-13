"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface HeaderProps {
 image: string
 children: ReactNode
}

export default function Header({ image, children }: HeaderProps) {
 return (
  <header className="hero min-h-screen" style={{ background: `url(${image}) no-repeat center center / cover` }}>
   <div className="flex items-center justify-center hero-overlay bg-opacity-70 px-4">
    <motion.div
     initial={{ y: 20, opacity: 0 }}
     whileInView={{ y: 0, opacity: 1 }}
     transition={{ ease: "easeInOut", duration: 1 }}
     className="flex flex-col max-w-6xl w-full mx-auto"
    >
     {children}
    </motion.div>
   </div>
  </header>
 )
}