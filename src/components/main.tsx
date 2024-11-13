import { ReactNode } from "react"

interface MainProps {
 children: ReactNode
}

export default function Main({ children }: MainProps) {
 return (
  <main className="px-4">{children}</main>
 )
}