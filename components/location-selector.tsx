"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LocationSelector() {
  const [location, setLocation] = useState("India")

  const locations = ["India", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata"]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1 h-9 border-gray-300">
          <MapPin className="w-4 h-4" />
          {location}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {locations.map((loc) => (
          <DropdownMenuItem key={loc} onClick={() => setLocation(loc)} className="cursor-pointer">
            {loc}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
