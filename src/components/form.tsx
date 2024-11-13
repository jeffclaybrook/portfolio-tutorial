"use client"

import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "./ui/button"
import { Form as ContactForm, FormField, FormItem, FormControl, FormLabel } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
 name: z.string(),
 email: z.string(),
 message: z.string()
})

export default function Form() {
 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   name: "",
   email: "",
   message: ""
  }
 })

 return (
  <ContactForm {...form}>
   <motion.form
    action=""
    method="POST"
    acceptCharset="UTF-8"
    className="space-y-4 max-w-lg mx-auto"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 1 }}
   >
    <FormField
     control={form.control}
     name="name"
     render={({ field }) => (
      <FormItem>
       <FormLabel>Name</FormLabel>
       <FormControl>
        <Input placeholder="Name" {...field} />
       </FormControl>
      </FormItem>
     )}
    />
    <FormField
     control={form.control}
     name="email"
     render={({ field }) => (
      <FormItem>
       <FormLabel>Email</FormLabel>
       <FormControl>
        <Input placeholder="email" {...field} />
       </FormControl>
      </FormItem>
     )}
    />
    <FormField
     control={form.control}
     name="message"
     render={({ field }) => (
      <FormItem>
       <FormLabel>Message</FormLabel>
       <FormControl>
        <Textarea placeholder="email" {...field} />
       </FormControl>
      </FormItem>
     )}
    />
    <div className="flex items-center justify-end">
     <Button type="submit" variant="custom">Submit</Button>
    </div>
   </motion.form>
  </ContactForm>
 )
}