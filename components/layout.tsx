import type { ReactNode } from "react"
import { Space_Grotesk } from 'next/font/google'
import Header from "./header"
const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'] , weight: ['400', '500', '700']})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={SpaceGrotesk.className}>
      <Header />
      <main>{children}</main>
    </div>
  )
}
