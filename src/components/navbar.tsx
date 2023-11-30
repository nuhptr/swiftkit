import Link from "next/link"

import { NavItems, MaxWidthWrapper, Icons } from "@/components"

export default function Navbar() {
   return (
      <header className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
         <div className="relative bg-white">
            <MaxWidthWrapper>
               <div className="border-b border-gray-200">
                  <div className="flex items-center h-16">
                     {/* Mobile Nav */}

                     <div className="flex ml-4 lg:ml-0">
                        <Link href="/">
                           <Icons.Logo className="w-10 h-10" />
                        </Link>
                     </div>

                     <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                        <NavItems />
                     </div>
                  </div>
               </div>
            </MaxWidthWrapper>
         </div>
      </header>
   )
}
