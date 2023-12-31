export const PRODUCT_CATEGORIES = [
   {
      label: "UI Kits",
      value: "ui-kits" as const,
      featured: [
         {
            name: "Newest",
            href: `/products?category=ui_kits`,
            imageSrc: "/nav/ui-kits/blue.jpg",
         },
         {
            name: "Editor picks",
            href: `/products?category=ui_kits`,
            imageSrc: "/nav/ui-kits/mixed.jpg",
         },
         {
            name: "Bestsellers",
            href: "/products?category=ui_kits",
            imageSrc: "/nav/ui-kits/purple.jpg",
         },
      ],
   },
   {
      label: "Icons",
      value: "icons" as const,
      featured: [
         {
            name: "Favorite Icon Picks",
            href: `/products?category=icons`,
            imageSrc: "/nav/icons/picks.jpg",
         },
         {
            name: "New Arrivals",
            href: "/products?category=icons&sort=desc",
            imageSrc: "/nav/icons/new.jpg",
         },
         {
            name: "Bestselling Icons",
            href: "/products?category=icons",
            imageSrc: "/nav/icons/bestsellers.jpg",
         },
      ],
   },
]
