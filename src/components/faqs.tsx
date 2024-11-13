"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { faqs } from "@/lib/data"

export default function Faqs() {
 return (
  <motion.div
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ ease: "easeInOut", duration: 1 }}
   aria-labelledby="faqs"
  >
   <Accordion type="single" collapsible>
    {faqs.map((faq, i) => (
     <AccordionItem value={faq.value} key={i}>
      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
      <AccordionContent>{faq.response}</AccordionContent>
     </AccordionItem>
    ))}
   </Accordion>
  </motion.div>
 )
}