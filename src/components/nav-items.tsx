"use client"

import { PRODUCT_CATEGORIES } from "@/constant"
import { useRef, useState } from "react"
import { NavItem } from "@/components"

export default function NavItems() {
   const [activeIndex, setActiveIndex] = useState<null | number>(null)

   const isAnyOpen = activeIndex !== null

   const navRef = useRef<HTMLDivElement | null>(null)

   return (
      <div className="flex h-full gap-4">
         {PRODUCT_CATEGORIES.map((category, index) => {
            const handleOpen = () => {
               if (activeIndex === index) setActiveIndex(null)
               else setActiveIndex(index)
            }

            const close = () => setActiveIndex(null)

            const isOpen = index === activeIndex

            return (
               <NavItem
                  key={category.value}
                  category={category}
                  handleOpen={handleOpen}
                  isOpen={isOpen}
                  isAnyOpen={isAnyOpen}
               />
            )
         })}
      </div>
   )
}
