import Link from "next/link"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { socials } from "@/lib/data"

export default function Footer() {
 return (
  <footer className="flex flex-col items-center py-16 bg-slate-50">
   <Link href={"/"} className="text-2xl uppercase mb-8">
    Jeffrey <strong>Claybrook</strong>
   </Link>
   <ul className="flex items-center justify-center gap-4 mb-8">
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
   <p className="text-xs text-center mb-2">Built using NextJS, TailwindCSS, shadcn/ui, and DaisyUI</p>
   <p className="text-xs text-center">© 2024 Jeffrey Claybrook</p>
  </footer>
 )
}