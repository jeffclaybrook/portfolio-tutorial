"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { NavbarButtonSheet as NavbarButton } from "./navbar-button"
import { Menu } from "./icons"
import { NavbarItems } from "@/types"
import { socials } from "@/lib/data"

interface NavbarProps {
 navbarItems: NavbarItems
}

export default function NavbarMobile(props: NavbarProps) {
 const pathname = usePathname()

 return (
  <Sheet>
   <div className="flex items-center justify-betaween absolute w-full p-3">
    <Link href={"/"} className="uppercase text-lg text-slate-300">
     Jeffrey <strong className="text-slate-50">Claybrook</strong>
    </Link>
    <SheetTrigger asChild>
     <Button variant="ghost" size="icon" className="text-slate-50">
      <Menu />
     </Button>
    </SheetTrigger>
   </div>
   <SheetContent side="left" className="px-3 py-4">
    <SheetHeader className="flex items-center justify-between flex-row space-y-0">
     <Link href={"/"} className="uppercase text-lg text-slate-900">
      Jeffrey <strong className="text-slate-600">Claybrook</strong>
     </Link>
    </SheetHeader>
    <div className="h-full flex flex-col">
     <div className="flex flex-col w-full gap-1 mt-5 mb-auto" role="nav">
      {props.navbarItems.links.map((link, i) => (
       <Link key={i} href={link.href} aria-label={`${link.label} page`}>
        <NavbarButton
         variant={pathname === link.href ? "secondary" : "ghost"}
         className="w-full"
        >
         {link.label}
        </NavbarButton>
       </Link>
      ))}
     </div>
     <ul className="flex items-center justify-around mt-auto mb-4">
      {socials.map((social, i) => (
       <li key={i}>
        <TooltipProvider>
         <Tooltip>
          <TooltipTrigger asChild>
           <Button variant="ghost" size="icon" asChild>
            <a href={social.href} target="_blank" rel="noreferrer" aria-label={`Link to Jeff Claybrook's ${social.label}`}>
             <social.icon />
             <span className="sr-only">{social.label}</span>
            </a>
           </Button>
          </TooltipTrigger>
          <TooltipContent>
           <span>{social.label}</span>
          </TooltipContent>
         </Tooltip>
        </TooltipProvider>
       </li>
      ))}
     </ul>
    </div>
   </SheetContent>
  </Sheet>
 )
}