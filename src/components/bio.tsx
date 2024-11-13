"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { bio } from "@/lib/data"

export default function Bio() {
 return (
  <motion.div
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ ease: "easeInOut", duration: 1 }}
   className="flex flex-col lg:flex-row gap-10 mb-10"
   aria-labelledby="about"
  >
   <div className="flex items-start justify-center">
    <Image
     src="/images/headshot.webp"
     alt="Jeff Claybrook headshot"
     width={250}
     height={250}
     className="rounded-full border-2 border-slate-100"
    />
   </div>
   <div className="flex-1">
    {bio.map((bio, i) => (
     <p key={i} className="text-md tracking-wide mb-4">{bio}</p>
    ))}
   </div>
  </motion.div>
 )
}