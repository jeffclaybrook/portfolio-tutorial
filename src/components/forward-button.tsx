import Link from "next/link"
import { Button } from "./ui/button"
import { ChevronRight } from "./icons"

interface ForwardButtonProps {
 label: string
 href: string
}

export default function ForwardButton({ label, href }: ForwardButtonProps) {
 return (
  <div className="flex justify-center mt-16">
   <Button variant="customOutline" size="lg" asChild>
    <Link href={href} aria-label={label}>
     {label}
     <ChevronRight />
    </Link>
   </Button>
  </div>
 )
}