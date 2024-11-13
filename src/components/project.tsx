import { NewTab } from "./icons"

interface ProjectProps {
 title: string
 href: string
 image: string
}

export default function Project({ title, href, image }: ProjectProps) {
 return (
  <a
   href={href}
   target="_blank"
   rel="noreferrer"
   aria-label={title}
   style={{ backgroundImage: `url(${image})` }}
   className="hero rounded-lg overflow-hidden hover:rounded-2xl duration-300"
  >
   <div className="hero-overlay flex flex-col justify-center items-center py-24 bg-opacity-65 text-slate-200 hover:bg-opacity-80 hover:rounded-2xl duration-300 rounded-lg">
    <h3 className="text-2xl tracking-wide mb-3 5">{title}</h3>
    <NewTab />
   </div>
  </a>
 )
}