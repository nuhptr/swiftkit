import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { PRODUCT_CATEGORIES } from "@/constant"

import { Button } from "./ui/button"

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
   category: Category
   handleOpen: () => void
   isOpen: boolean
   isAnyOpen: boolean
}

export default function NavItem({ category, handleOpen, isOpen, isAnyOpen }: NavItemProps) {
   return (
      <div className="flex">
         <div className="relative flex items-center">
            <Button className="gap-1.5" onClick={handleOpen} variant={isOpen ? "secondary" : "ghost"}>
               {category.label}
               <ChevronDown
                  className={cn("h-4 w-4 transition-all text-muted-foreground", {
                     "-rotate-180": isOpen,
                  })}
               />
            </Button>
         </div>

         {isOpen ? (
            <div
               className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground", {
                  "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
               })}>
               <div className="absolute inset-0 bg-white shadow top-1/2" aria-hidden="true">
                  <div className="relative bg-white">
                     <div className="px-8 mx-auto max-w-7xl">
                        <div className="grid grid-cols-4 py-16 gap-x-8 gap-y-10">
                           <div className="grid grid-cols-3 col-span-4 col-start-1 gap-x-8">
                              {category.featured.map((item) => (
                                 <div className="relative text-base group sm:text-sm" key={item.name}>
                                    <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-video group-hover:opacity-75">
                                       <Image
                                          src={item.imageSrc}
                                          alt="Product Category Image"
                                          fill
                                          className="object-cover object-center"
                                       />
                                    </div>

                                    <Link href={item.href} className="block mt-6 font-medium text-gray-900">
                                       {item.name}
                                    </Link>
                                    <p className="mt-1" aria-hidden="true">
                                       Shop now
                                    </p>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ) : null}
      </div>
   )
}
