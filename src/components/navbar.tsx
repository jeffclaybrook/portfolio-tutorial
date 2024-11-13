"use client"

import { useMediaQuery } from "usehooks-ts"
import { NavbarItems } from "@/types"
import NavbarDesktop from "./navbar-desktop"
import NavbarMobile from "./navbar-mobile"

const navbarItems: NavbarItems = {
 links: [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Artboards", href: "/artboards" },
  { label: "Contact", href: "/contact" }
 ]
}

export default function Navbar() {
 const isMobile = useMediaQuery("(max-width: 1024px)", {
  initializeWithValue: false
 })

 if (isMobile) {
  return <NavbarMobile navbarItems={navbarItems} />
 }

 return <NavbarDesktop navbarItems={navbarItems} />
}