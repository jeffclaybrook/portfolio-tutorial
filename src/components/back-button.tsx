import Link from "next/link"
import { Button } from "./ui/button"
import { ChevronLeft } from "./icons"

export default function BackButton() {
 return (
  <div className="flex justify-center mt-16">
   <Button variant="customOutline" size="lg" asChild>
    <Link href={"/"} aria-label="Back Home">
     <ChevronLeft />
     Back Home
    </Link>
   </Button>
  </div>
 )
}