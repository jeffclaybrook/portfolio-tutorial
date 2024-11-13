import { Button, ButtonProps } from "./ui/button"
import { SheetClose } from "./ui/sheet"
import { cn } from "@/lib/utils"

export function NavbarButton({ className, children, ...props }: ButtonProps) {
 return (
  <Button
   variant="ghost"
   className={cn("justify-start gap-2", className)}
   {...props}
  >
   <span>{children}</span>
  </Button>
 )
}

export function NavbarButtonSheet(props: ButtonProps) {
 return (
  <SheetClose asChild>
   <NavbarButton {...props} />
  </SheetClose>
 )
}