"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface ProductCardProps {
  id: string
  title: string
  price: string
  location: string
  image: string
  featured?: boolean
  brand?: string
  fuelType?: string
  seats?: string
  category?: string
  condition?: string
}

export default function ProductCard({
  id,
  title,
  price,
  location,
  image,
  featured = false,
  brand,
  fuelType,
  seats,
  category,
  condition,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="overflow-hidden bg-white border rounded-lg">
      <div className="relative">
        <Link href={`/product/${id}`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="object-cover w-full aspect-video"
          />
        </Link>
        <button
          className="absolute p-1.5 bg-white rounded-full top-2 right-2 hover:bg-gray-100"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
        </button>
        {featured && (
          <div className="absolute left-0 px-2 py-1 text-xs font-medium text-black bg-yellow-400 top-2">FEATURED</div>
        )}
      </div>

      <div className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-lg font-bold">₹ {price}</div>
            <h3 className="mt-1 font-medium line-clamp-1">{title}</h3>
          </div>
        </div>

        <div className="mt-2 space-y-1 text-sm text-gray-500">
          {brand && fuelType && (
            <div>
              {brand} {fuelType}
            </div>
          )}
          {condition && category && (
            <div>
              Selling my {condition} {category}
            </div>
          )}
          <div className="flex items-center justify-between">
            <span>{location}</span>
            <span className="text-xs">{formatDistanceToNow(new Date(Date.now() - 86400000), { addSuffix: true })}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
