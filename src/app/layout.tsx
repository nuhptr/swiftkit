import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"

import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "SwiftKIT | Design modern UI Kit for Web/apps",
   description: "SwiftKIT is a UI Kit for Web, built from figma, Sketch, and Invision.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" className="h-full">
         <body className={cn("relative h-full font-sans antialiased", inter.className)} suppressHydrationWarning={true}>
            <main className="relative flex flex-col min-h-screen">
               <Navbar />
               <div className="flex-1 flex-grow">{children}</div>
            </main>
         </body>
      </html>
   )
}
