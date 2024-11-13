import type { Metadata } from "next"
import { ReactNode } from "react"
import { Plus_Jakarta_Sans } from "next/font/google"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio Tutorial",
  description: "Created using NextJS, TailwindCSS, shadcn/ui, DaisyUI, and Framer Motion",
}

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}