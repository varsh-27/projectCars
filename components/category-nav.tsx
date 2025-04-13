"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CategoryNav() {
  const [showAllCategories, setShowAllCategories] = useState(false)

  const categories = [
    { name: "Cars", href: "/cars" },
    { name: "Motorcycles", href: "/motorcycles" },
    { name: "Mobile Phones", href: "/mobile-phones" },
    { name: "For Sale: Houses & Apartments", href: "/houses-apartments-for-sale" },
    { name: "Scooters", href: "/scooters" },
    { name: "Commercial & Other Vehicles", href: "/commercial-vehicles" },
    { name: "For Rent: Houses & Apartments", href: "/houses-apartments-for-rent" },
  ]

  return (
    <div className="bg-white border-b">
      <div className="container flex items-center h-12 px-4 mx-auto overflow-x-auto">
        <Button
          variant="ghost"
          className="flex items-center gap-1 h-full px-3 font-medium text-teal-700 hover:bg-gray-100"
          onClick={() => setShowAllCategories(!showAllCategories)}
        >
          ALL CATEGORIES
          <ChevronDown className="w-4 h-4" />
        </Button>

        <div className="flex items-center h-full space-x-1 overflow-x-auto">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex items-center h-full px-3 text-sm font-medium whitespace-nowrap hover:bg-gray-100"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
